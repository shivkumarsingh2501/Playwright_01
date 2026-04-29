@smoke @regression
Feature: Rahul Shetty Practice Page

  Scenario: Validate radio and checkbox functionality

    Given User opens Rahul Shetty practice page
    When User selects "radio2"
    And User checks checkbox "2"
    And User unchecks checkbox "2"
    Then Radio "radio2" should be selected
    And Checkbox "2" should be unchecked