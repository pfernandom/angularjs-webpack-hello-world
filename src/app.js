import angular from 'angular'
import { Header } from './header/header.js';

var app = angular.module('app', []);

app.directive('header', () => new Header());

angular.bootstrap(document.getElementById('app'), ['app']);

