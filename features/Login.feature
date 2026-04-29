Feature: Login Functionality

    Scenario: Valid Login

        Given User is on login page
        When User enters valid username and password
        And User clicks login button
        Then User should see dashboard


    Scenario: Place an order

        Given Login to ecommerce application with "rahulshetty" and "secret"
        When Add "ZARA COAT 3" to cart
        Then Verify "ZARA COAT 3" displayed in cart
        When Enter valid details and place order
        Then Verify order in order history page