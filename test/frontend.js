// # /test/helloWorld.spec.js
import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import App from '../client/components/App';
import Navbar from '../client/components/Navbar';
import Feed from '../client/components/Dash/Feed';
import FeedItem from '../client/components/Dash/FeedItem';
import Dashboard from '../client/components/Dashboard';
import ClothingMapper from '../client/components/ClothingMapper';
import ClothingArticle from '../client/components/ClothingArticle';
import Profile from '../client/components/Profile';
import FriendsWishlist from '../client/components/FriendsWishlist';
import FriendsWishlistItem from '../client/components/FriendsWishlistItem';
import Wishlist from '../client/components/Wishlist';
import WishlistItem from '../client/components/WishlistItem';
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';

describe('Frontend Testing', ()=>{
  describe('App Test', () => {
    it('renders as a <div>', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.type()).to.eql('div');
    });

    it('renders an instance of <Navbar />', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Navbar)).to.have.length(1);
    });

    it('should not contain a valid user to start', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('user').name).to.eql(undefined);
      expect(wrapper.find('.landing-hero')).to.have.length(1);
    });
    it('should render properly when a user is set into the state', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({user: {name: 'carlos'} });
      expect(wrapper.find('.landing-hero')).to.have.length(0);
    });
  });

  describe('Feed Test', () => {
    it('should contain all the necessary elements', () => {
      var arr = [{id: 1}, {id: 2}, {id: 3}]
      const wrapper = shallow(<Feed feed={arr} user={{name: 'me'}}/>);
      expect(wrapper.find('button')).to.have.length(5);
    });

    it('should render 3 items in the feed', () => {
      var arr = [{id: 1}, {id: 2}, {id: 3}]
      const wrapper = shallow(<Feed feed={arr} user={{name: 'me'}}/>);
      expect(wrapper.find(FeedItem)).to.have.length(3);
    });
  });

  describe('Dashboard Test', ()=>{
    it('should contain all the necessary elements', () => {
      const wrapper = shallow(<Dashboard />);
      expect(wrapper.find('.dashboard-tools')).to.have.length(1);
      expect(wrapper.find('.dashboard-search')).to.have.length(1);
      expect(wrapper.find('.dashboard-feed')).to.have.length(1);
    });
  });

  describe('ClothingMapper Test', () => {
    it('should render 2 articles of clothing', () => {
      var fakeFeed = [['1/',2,3], ['4/',5,6]];
      var fakeLikes = [1,2];
      const wrapper = shallow(<ClothingMapper likeItems={fakeLikes} feed={fakeFeed}/>);
      expect(wrapper.state('feed')).to.have.length(2);
    });
  });

  describe('FriendsWishlist Test', () => {
    it('should render 3 instances of FriendsWishlistItem', () => {
      var fakeList = [1,2,3];
      const wrapper = shallow(<FriendsWishlist list={fakeList} />);
      expect(wrapper.find(FriendsWishlistItem)).to.have.length(3);
    });
  });

  describe('Wishlist Test', () => {
    it('should render 2 instances of WishlistItem', () => {
      var fakeList = [{pic_name: 'abc'}, {pic_name: 'abc'}]
      const wrapper = shallow(<Wishlist list={fakeList} getWishList={{}}/>)
      expect(wrapper.find(WishlistItem)).to.have.length(2);
    });
  });

});



