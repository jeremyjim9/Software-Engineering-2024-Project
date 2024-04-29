describe('Title Test', () => {
  it('Should display the title "Vehicle Recall Search"', () => {
    // Visit the website
    cy.visit('https://safety-ratings-website.s3.amazonaws.com/search.html')
    // Assert that the title "Vehicle Recall Search" is visible on the page
    cy.contains('#title', 'Safety Ratings Search').should('be.visible');
    cy.get('p.text-body-secondary > span.fw-bold').should('contain', 'NHTSA');
  });
});


describe('Log in functionality', () => {
  it('Searches for safety ratings', () => {
    // Visit the website
    cy.visit('https://safety-ratings-website.s3.amazonaws.com/login.html');

    // Enter "Acura" into the "make" input field
    cy.get('#username').type('test2');
    cy.wait(2000)

    // Enter "2020" into the "year" input field
    cy.get('#password').type('1234');
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#login').click();
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#search').click();

    // Assert that the results show acuras
    cy.url().should('eq', 'https://safety-ratings-website.s3.amazonaws.com/results.html');
  });
});

describe('Search after login functionality', () => {
  it('Searches for safety ratings', () => {

    // Visit the website
    cy.visit('https://safety-ratings-website.s3.amazonaws.com/login.html');

    // Enter "Acura" into the "make" input field
    cy.get('#username').type('test2');
    cy.wait(2000)

    // Enter "2020" into the "year" input field
    cy.get('#password').type('1234');
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#login').click();
    cy.wait(2000)

    cy.get('#make').type('Acura');
    cy.wait(2000)

    // Enter "2020" into the "year" input field
    cy.get('#year').type('2020');
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#search').click();

    // Assert that the results show acuras
    cy.get('#resultsCardHeader').should('contain.text', '2020 Acura');
  });
});

describe('Asserting number of results', () => {
  it('Searches for safety ratings', () => {
    // Visit the website
    cy.visit('https://safety-ratings-website.s3.amazonaws.com/login.html');

    // Enter "Acura" into the "make" input field
    cy.get('#username').type('test2');
    cy.wait(2000)

    // Enter "2020" into the "year" input field
    cy.get('#password').type('1234');
    cy.wait(1000)

    // Click the "Search" button
    cy.get('#login').click();
    cy.wait(1000)

    // Click the "Search" button
    cy.get('#search').click();

    // Assert that the results show acuras
    // Count the number of sections with the specified class name
    cy.get('#resultsAmt').should('contain.text', '195')  
  });
});

describe('Assert user auth - cus', () => {
  it('Searches for safety ratings', () => {

    // Visit the website
    cy.visit('https://safety-ratings-website.s3.amazonaws.com/login.html');

    // Enter "Acura" into the "make" input field
    cy.get('#username').type('test');
    cy.wait(2000)

    // Enter "2020" into the "year" input field
    cy.get('#password').type('123');
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#login').click();
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#search').click();

    // Assert that the results show acuras
    cy.get('#cusRep').should('contain.text', 'Customer');
  });
});

describe('Assert user auth - rep', () => {
  it('Searches for safety ratings', () => {

    // Visit the website
    cy.visit('https://safety-ratings-website.s3.amazonaws.com/login.html');

    // Enter "Acura" into the "make" input field
    cy.get('#username').type('test2');
    cy.wait(2000)

    // Enter "2020" into the "year" input field
    cy.get('#password').type('1234');
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#login').click();
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#search').click();

    // Assert that the results show acuras
    cy.get('#cusRep').should('contain.text', 'Representative');
  });
});

describe('Log out test', () => {
  it('Should display the title "Vehicle Recall Search"', () => {
    // Visit the website
    cy.visit('https://safety-ratings-website.s3.amazonaws.com/login.html')
    
    cy.get('#username').type('test2');
    cy.wait(2000)

    // Enter "2020" into the "year" input field
    cy.get('#password').type('1234');
    cy.wait(2000)

    // Click the "Search" button
    cy.get('#login').click();
    cy.wait(2000)

    cy.get('#signout').click()
    cy.url().should('eq', 'https://safety-ratings-website.s3.amazonaws.com/search.html');
  });
});

