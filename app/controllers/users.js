import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.store.query('user', { name: param }).then((results) => {
          return { query: param, results: results };
        });
      } else {
        return this.store.findAll('user').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }

});
