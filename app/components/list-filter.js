import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',
  results: {},
  sort: '',
  
  init() {
    this._super(...arguments);
    this.filter('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.value) {
          if (this.sort === '') {
            this.set('results', filterResults.results);
          } else if (this.sort == 'asc') {
            this.set('results', filterResults.results.sortBy('name'));
          } else if (this.sort == 'desc') {
            const results = filterResults.results.sortBy('name');
            this.set('results', results.reverse());
          }
          // this.set('results', filterResults.results);
        }
      });
    },
    ascendingResult(){
      this.set('sort', 'asc');
      this.send('handleFilterEntry');
    },
    decendingResult(){
      this.set('sort', 'desc');
      this.send('handleFilterEntry');
    }
  }

});
