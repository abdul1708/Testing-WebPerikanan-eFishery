import React, { Component } from 'react'
import axios from 'axios'

import Fish from './fish'
import Pagination from './pagination'

export default class price extends Component {
  state = {
    fish: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 10
  }

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list');
      this.setState({ fish: results.data });
      this.setState({ loading: false });
    }
    getPosts();
  }

  render() {
    const { currentPage, postsPerPage, fish, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = fish.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div
          class="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div className='row'>
            <div className='col-8'>
              <h2>Price List</h2>
            </div>
            <div className='col-4'>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
          </div>
        </div>
        <Fish fish={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={fish.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </main>
    )
  }
}
