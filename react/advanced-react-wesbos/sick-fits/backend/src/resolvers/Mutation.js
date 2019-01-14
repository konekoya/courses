const mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    // Create a dog!
    const newDog = { name: args.name };
    global.dogs.push(newDog);

    console.log(args);
  }
};

module.exports = mutations;
