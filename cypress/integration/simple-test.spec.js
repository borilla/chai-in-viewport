import chaiInViewport from '../../dist/index';

chai.use(chaiInViewport);

describe('chai-in-viewport simple test', function() {
	beforeEach(() => {
		cy.visit('cypress/fixtures/simple-test.html');
	});

	describe('initially (when page is scrolled to top)', () => {
		it('div-1 is in viewport', function() {
			cy.get('#div-1').should('be.inViewport');
		});

		it('div-2 is in viewport', function() {
			cy.get('#div-2').should('be.inViewport');
		});

		it('div-3 is not in viewport', function() {
			cy.get('#div-3').should('not.be.inViewport');
		});
	});

	describe('when page is scrolled halfway', () => {
		beforeEach(() => {
			cy.scrollTo('center');
		});

		it('div-1 is in viewport', function() {
			cy.get('#div-1').should('be.inViewport');
		});

		it('div-2 is in viewport', function() {
			cy.get('#div-2').should('be.inViewport');
		});

		it('div-3 is in viewport', function() {
			cy.get('#div-3').should('be.inViewport');
		});
	});

	describe('when page is scrolled to bottom', () => {
		beforeEach(() => {
			cy.scrollTo('bottom');
		});

		it('div-1 is not in viewport', function() {
			cy.get('#div-1').should('not.be.inViewport');
		});

		it('div-2 is in viewport', function() {
			cy.get('#div-2').should('be.inViewport');
		});

		it('div-3 is in viewport', function() {
			cy.get('#div-3').should('be.inViewport');
		});
	});
});
