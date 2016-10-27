import Ember from 'ember';

export default Ember.Component.extend({
	sortProperties: ['created_at:desc'],  // Sort post in descending order based on created_at property
	sortedPosts: Ember.computed.sort('posts', 'sortProperties')
});
