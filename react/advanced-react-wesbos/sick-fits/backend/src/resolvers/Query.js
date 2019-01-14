const Query = {
  dogs(parent, args, ctx, info) {
    // return [{ name: "Snickers" }, { name: "Sunny" }];
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};

module.exports = Query;
