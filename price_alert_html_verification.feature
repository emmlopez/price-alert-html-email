#------------------------------------------------
# Brand             : BCOM
# Author            : OC List - QE
# Date Created      : August-6, 2014
#------------------------------------------------

Feature: As a customer, I should receive an Sales/price alert email, with specified email template

  @14I @selection @lists_2256 @shopapp @manual
  Scenario: As a signed in user, I should verify WL alert email template

    Given I visit the web site as a signed in user
    When I add a "productA" that is going on "POS sale" before the "sale_start_date" in wishlist
      And I select wishlist link on the wishlist overlay in PDP page
    Then I should see wishlist landing page as a signed in user
    When I check the item on sale link for the list in wishlist page
    Then I should see item on sale alert as ON for the list in wishlist page
      And I should see sales alert email on "sale_start_date" with wishlist product information
      And I should standard email header and footer
      And I should see user's first name
      And I should verify product images link to PDP page
      And I should see product name and all sale price
      And I should verify wishlist link in the email
      And I should see legal message



