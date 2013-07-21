Feature: Use Phantomjs for Validating a Feature
  In order to verify web app functionality
  As a software guy
  I want to demonstrate that phantomjs can be used in a cucumber step

  Scenario: Loading a page
    Given a phantomjs browser engine connected via phantom-proxy
    When I visit a web page
	And the web page is loaded
    Then the page will finish rendering
