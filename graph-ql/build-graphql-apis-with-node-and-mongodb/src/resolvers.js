import Product from './models/product';

export const resolvers = {
  Query: {
    async getProduct(_, { _id }) {
      return await Product.findById(_id);
    },
    async allProducts() {
      return await Product.find();
    },
  },
  Mutation: {
    async createProduct(_, { input }) {
      return await Product.create(input);
    },
    async updateProduct(_, { _id, input }) {
      return await Product.findOneAndUpdate({ _id }, input);
    },
    async deleteProduct(_, { _id }) {
      return await Product.findByIdAndRemove(_id);
    },
  },
};
