## Feature: Division Calculator

  As a user
  I want to be able to perform division
  So that I can quickly get the result
  
  ## Scenario: Successful division
     Given I have a division calculator form
    When I enter a dividend and a divider
    Then I should see the result of the division

## Scenario: Division with empty input
    Given I have a division calculator form
    When I submit the form with empty inputs
    Then I should see a message indicating that both values are required

 ## Scenario: Division by zero
    Given I have a division calculator form
    When I submit the form with a divider of 0
    Then I should see a message indicating that division by zero is not allowed

  ## Scenario: Division with non-numeric input
    Given I have a division calculator form
    When I submit the form with non-numeric inputs
    Then I should see a critical error message and be prompted to reload the page


![alt text](image.png)

