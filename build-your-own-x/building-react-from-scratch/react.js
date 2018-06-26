function createElement(type, config, children) {
  // Clone the passed in config (props). In React
  // we move some special props off of this object (keys, refs)
  let props = Object.assign({}, config);

  // Build props.children. We'll make an array
  // if we have more than 1
  let childCount = arguments.length - 2;
  if (childCount === 1) {
    props.children = children;
  } else if (childCount > 1) {
    props.children = [].slice.call(arguments, 2);
  }

  return {
    type,
    props,
  };
}

// Bookkeeping bits, We need to store some data
// and ensure that no roots conflict.
const ROOT_KEY = 'dlthmRootId';
const instancesByRootID = {};
let rootID = 1;

function isRoot(node) {
  if (node.dataset[ROOT_KEY]) {
    return true;
  } else {
    return false;
  }
}

function render(element, node) {
  assert(Element.isVaildElement(element));

  // First check if we've already rendered into
  // this node. If so, this is an update.
  // otherwise this is an initial render.

  if (isRoot(node)) {
    update(element, node);
  } else {
    mount(element, node);
  }
}

function mount(element, node) {
  // Create the internal instance. This abstracts
  // away the different components types.
  let component = instantiateComponent(element);

  // Store this for later updates & unmounting.
  instancesByRootID[rootID] = component;

  // Mounting generates DOM nodes. This is where
  // React determines if we're re-mounting
  // server-rendered content.
  let renderedNode = Reconciler.mountComponent(component, node);

  // Do some DOM operations, marking this node as
  // a root, and inserting the new DOM as a child.
  node.dataset[ROOT_KEY] = rootID;
  DOM.empty(node);
  DOM.appendChild(node, renderedNode);
  rootID++;
}

function update(element, node) {
  // Find the internal instance and update it
  let id = node.dataset[ROOT_KEY];
  let instance = instancesByRootID[id];

  let prevElem = instance_currentElement;
  if (shouldUpdateComponent(prevElem, element)) {
    // Send the new element to the instance
    Reconciler.receiveComponent(instance, element);
  } else {
    // Unmount and then mount the new one
    unmountComponentAtNode(node);
    mount(element, node);
  }
}

// This determines if we're going to end up
// reusing an internal instance or not. This is
// one of the big shortcuts that React does,
// stopping us from instantiating and comparing
// full threes. Instead we immediately throw away
// a subtree when updating from one element type
// to another.
function shouldUpdateComponent(prevElement, nextElement) {
  // Simply use element.type.
  // 'div' !== 'span'
  // ColorSwatch !== 'CounterButton'
  // Note: In React we would also look at the key.
  return prevElement.type === nextElement.type;
}
