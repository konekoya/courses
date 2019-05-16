import React from "react";

class Fetch extends React.Component {
  state = {
    data: null,
    error: null
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.url && this.props.url !== prevProps.url) {
      this.fetchData(this.props.url);
    }
  }

  async fetchData() {
    try {
      const response = await fetch(this.props.url);
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { error, data, loading } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return this.props.error(error);
    if (data) return this.props.render(this.state.data);
    else return null;
  }
}

export default Fetch;
