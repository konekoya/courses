import React from 'react';
import d3 from 'd3';
import _ from 'underscore';

const width = 960;
const height = 500;
const force = d3.layout
  .force()
  .charge(-300)
  .linkDistance(50)
  .size([width, height]);

class Graph extends React.Component {
  componentWillMount() {
    d3.force.on('tick', () => {
      // after force calculation starts, call
      // forceUpdate on the React component on each tick
      this.forceUpdate();
    });
  }

  componentWillReceiveProps(nextProps) {
    // we should actually clone the nodes and links
    // since we're not supposed to directly mutate
    // props passed in from parent, and d3's force function
    // mutates the nodes and links array directly
    // we're bypassing that here for sake of brevity in example
    force.nodes(nextProps.nodes).links(nextProps.links);

    force.start();
  }

  render() {
    // use React to draw all the nodes, d3 calculates the x and y
    const nodes = _.map(this.props.nodes, node => {
      const transform = 'translate(' + node.x + ',' + node.y + ')';
      return (
        <g className="node" key={node.key} transform={transform}>
          <circle r={node.size} />
          <text x={node.size + 5} dy=".35em">
            {node.key}
          </text>
        </g>
      );
    });

    const links = _.map(this.props.links, link => {
      return (
        <line
          className="link"
          key={link.key}
          strokeWidth={link.size}
          x1={link.source.x}
          x2={link.target.x}
          y1={link.source.y}
          y2={link.target.y}
        />
      );
    });

    return (
      <svg width={width} height={height}>
        <g>
          {links}
          {nodes}
        </g>
      </svg>
    );
  }
}

export default Graph;
