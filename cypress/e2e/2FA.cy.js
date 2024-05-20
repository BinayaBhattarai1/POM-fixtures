import { authenticator } from 'otplib';
describe('2FA', () => {
    let secretValue;
    let secretVal;
    let accessToken;
    let token;
    let token1;
    let secretRes;

    // Step 1: Extract Secret Value
    it('Extract Secret Keys', () => {
        cy.api({
            method: 'POST',
            url: 'http://172.31.1.20/gateway/web-login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                grant_type: 'password',
                username: 'binaya41',
                password: 'binaya41',
                user_type: 'WEB',
                menu_type: 'BANKING_PORTAL_MENU'
            }
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.message).eq('TOTP is required');
            secretValue = response.body.data.secretKey;
            secretVal = response.body.data.secret;
            cy.log('Generated Secret Key:', secretValue);
            cy.log('Generated Secret:', secretVal);
        });
    });

    it('Send TOTP code to validate 2FA', () => {
        const SecretKey='JQZE4RRSII2EQU22JVNFOTCMGI';
        token=authenticator.generate(SecretKey);
        cy.api({
            method: 'POST',
            url: 'http://172.31.1.20/gateway/otp/verify/totp',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                 secret:   secretVal  /*secretRes|| secretVal*/,
                secretKey: SecretKey,
                otp:token                /*token || token1*/
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            accessToken = response.body.data.access_token;
            cy.log(accessToken)
        });
    });
});

    // // Step 2:Give secret and secretKey to activate 2 FA
    // it('Check wheather to 2 FA is activated or not', () => {
    //     cy.wrap(null).then(() => {
    //         if (secretValue == null) {
    //             // Generate TOTP using the secret value
    //             token = authenticator.generate(secretVal);
    //             cy.log('Generated TOTP:', token);
    //         } else if (!secretValue === null) {
    //             cy.api({
    //                 method: 'PATCH',
    //                 url: 'http://172.31.1.20/gateway/webApi/user/two-factor-auth/activate',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: {
    //                     secret: secretVal,
    //                     secretKey: secretValue
    //                 }
    //             }).then((response) => {
    //                 expect(response.status).eq(200);
    //                 expect(response.body.message).to.eq('Two Factor Setup has been updated successfully');
    //                 secretRes = response.body.data.secret;
    //                 cy.log('Secret:', secretRes);
    //                 token1 = authenticator.generate(secretRes); //generate TOTP
    //                 cy.log(token1);
    //             })
    //         }
    //     });
    // });