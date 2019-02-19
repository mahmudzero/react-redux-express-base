import React, { Component, PureComponent } from 'react';

export default class HomePage extends Component {
  state = {
    loading: false,
    error: '',
  }

  render() {
    const { error } = this.state;

    return (
      <div className='home-page'>
        <header className='home-page__header'>
          <div className='content'>
            <button className='green-button'>
              <i className='fas fa-plus' /> New Item
            </button>
          </div>
        </header>
        <section className='home-page__content'>
          <div className='content'>
            { error ? <div>Error loading data</div> : <div>Data</div> }
          </div>
        </section>
      </div>
    );
  }
}
