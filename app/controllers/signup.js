import Controller from '@ember/controller';

export default Controller.extend({

  errorMessage: '',
  actions: {
    registerUser: function(){
      let name = this.name && this.name.trim();
      let username = this.username && this.username.trim();
      // let email = this.email && this.email.trim();
      let password = this.password && this.password.trim();
      let registeredUser = this.store.createRecord('user',{
        name: name,
        username: username,
        // email: email,
        password: password
      });
      // debugger
      if (name && username && password) {
        return registeredUser.save().then((user) => {
          window.location.href = '/login';
        }).catch((reason) => {
            this.set('errorMessage', reason.error || reason);
          }); 
      } else if (username === undefined && password === undefined) {
        // debugger
        this.set('errorMessage', 'Plase enter Username and Password.');
      } else {
        this.set('errorMessage', 'Plase enter User details.');
      }
      // return registeredUser.save();
      
    }
  }

});
