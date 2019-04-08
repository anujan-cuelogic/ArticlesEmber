import Component from '@ember/component';
import { inject as service } from '@ember/service';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Component.extend({

  actions: {

    editBio(user) {
      this.editBio(user);
    },

    updateBio(user) {
      this.updateBio(user, this.bioText)
    },

    closeEditor() {
      this.closeEditor();
    }

  }
});
