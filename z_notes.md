Change BASE_URL in cypress.config.js to production site address
Make sure the pages.yml refer to master branch

When I try to use local host as visitHome, it can not get the request. it waits and times out. cy.wait("@loginRequest").its("response.statusCode").should("eq", 200); 
I can not figure out why. Tried to debug. Tried setting baseUrl in cypress.config to local host, no luck. I know localhost is best to use for development testing, and the deployed site for post-deployment testing, but I could not avoid it now.  