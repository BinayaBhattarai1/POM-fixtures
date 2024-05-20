  
describe('Pass OTP Dynamically', () => {
    let secretValue
    let otpRegex
    it('Extract secret value from Login API', () => {
        cy.request({
            method: 'POST',
            url: 'http://172.31.1.20/gateway/mobile-login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                username: '9848190150',
                password: 'test123',
                mobileNotificationId: 'MOBILEkahas',
                databaseId: '713',
                IMEI: '09a380b496a53f88',
                isRegister: 'false',
                mobileOs: 'IOS'
            },
        }).then((response) => {
            console.log(response);
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq(true);
            expect(response.body.data.message).to.eq('NEW DEVICE DETECTED');
            expect(response.body.message).to.eq('OTP has been sent successfully');
            secretValue = response.body.data.secret;
            // console.log(secretValue);
            
        });
    });
    it('Extract OTP from Outgoing Report', () => {
        cy.request({
            method: 'GET',
            url: 'http://172.31.1.20/gateway/mdabaliApi/report/smsReportPaginated/1?fromDate=2024-05-14&toDate=2024-05-14&pq_datatype=JSON&pq_curpage=1&pq_rpp=20&_=1715686969375',
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2hMaXN0IjpbXSwidXNlcl9uYW1lIjoiYmluYXlhMzIyMSIsImlzQ2xpZW50QWRtaW4iOnRydWUsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJyb2xlcyI6WyJDTElFTlRfQURNSU4iLCJSRVRFUlRSRVQiLCJERkdGREdGREdEIiwiRVhURVJOQUxfQ0xJRU5UIiwiR0ZER0RGRyIsIkJIQUtUQVBVUl9BRE1JTm5ubm5ubm5ubm5ubm5ubm5ubm5ubm4iLCJJTlRFUk5BTEZJTkFOQ0UiLCJDT01NT05fQlJBTkNIXzIiLCJBRE1JTiIsIlJPTEUtTkFNRSIsIkNPTU1PTl9CUkFOQ0giLCJBQVJKQU4iLCJFWFRFUk5BTE5NQyIsIkNMSUVOVF9TVEFGRl9DSEVRVUUiLCJBQUEiLCJSRVRFUlRSRVRSRVQiLCJLQVRITUFORFUtQlJBTkNIIiwiTk1DX0FETUlOIiwiQ0xJRU5UX1ZFTkRPUlMiLCJURVNUIiwiQ0xJRU5UX0FETUlOX0lDRlQiLCJDTElFTlRVU0VSIiwiRVJURVJURVJUUkVUIiwiRV9CQU5LSU5HIiwiUFJBS0FTSF9BRE1JTiIsIkFDQ09VTlRfUkVQT1JUIiwiVEVTVF9USVRMRSIsIlJPSElUIiwiQkdSVEhUUkdUUiIsIlNZU1RFTV9BRE1JTiIsIkEiLCJSRVBPUlRfUk9MRSIsIkFHUkkiLCJBQ1RJVkUiLCJSVFJFVFJFIiwiU1VQRVJfQURNSU5JU1RSQVRPUiIsIkRZTkFNSUNfQURNSU4iLCJNRVJDSEFOVCIsIkVSRVJFV1JFV1IiLCJST0xFX0NMSUVOVF9BRE1JTiIsIlRFU1RST0xFIiwiSFVCIiwiVEVXRVRFV1QiLCJQUkFLU0gtQURNSU4iLCJTTVNfVVNFUiIsIlNBTk9fQURNSU4iLCJQT1JUQUxfQ0xJRU5UX0FETUlOIiwiQURNSU5BRE1JTmFkbWluIiwiTkVFTElNQS1TVVBFUi1BRE1JTiIsIkJSQU5DSF9BRE1JTiIsIkJSQU5DSCIsIkJSQU5DSEFETUlOVVNFUiIsIlJUUkVUUkVUUiIsIkNSRUFURURfQURNSU4iLCJTVVBFUi1BRE1JTk4iLCJURVNUX0NMSUVOVCIsIlNIRVJQQV9BRE1JTiIsIlJFUE9SVCIsIkNMSUVOVCIsIlRSRVRSRVRSRVQiLCJTVVBQT1JUX1RFU1QiLCJDTElFTlRfQURNSU5fQ0hFUVVFIiwiQlJBTkNILUxBSS1ST0xFIiwiU0FORFBJVFBfSFRBUEEiLCJDT01QVVRFUl9BRE1JTiIsIlBPUlRBTF9DTElFTlRfVVNFUiIsIlRFU1RFUiIsIkNMSUVOVF9BRE1JTl9URVNUIiwiRFlOQU1JQ19NRU5VIiwiTUFOQUdFUk9MRSIsIlJPTEVfQURNSU4iLCJFUlRSRVRSVFJUUiIsIlJPTEVfQ0xJRU5UX1NVQl9VU0VSIiwiUlRSRVRSRVRSRVQiLCJBRE1JTl9DTElFTlQiLCJBQ0NFU1NfUk9MRSIsIlJUUkVUUlRSIiwiUk9MRV9DTElFTlRTIiwiU0FMRVMtQURNSU4iXSwic2Vzc2lvbklkIjoiOTAwOWM3MWQtMjc1Mi00ZDM3LWI5YzAtM2FmMDE2NzQyN2MzIiwiZXhwIjoxNzE2MTAwNzg4LCJ1c2VySWQiOjI4OTgsImF1dGhvcml0aWVzIjpbIkNSRURJVFJFUVVFU1RSRVBPUlRfVVBEQVRFIiwiUkVNSVRfUkVDT05DSUxJQVRJT05fUkVQT1JUX0FERCIsIkFETUlOX1ZJRVciLCJTRVJWSUNFQUNUSU9OX1VQREFURSIsIkFETUlOX0FERCIsIlJFUE9SVFNfVklFVyIsIkNSRURJVFJFUVVFU1RfREVMRVRFIiwiVFJBTlNBQ1RJT05TX1VQREFURSIsIlJPTEVVU0VSQVNTSUdOTUVOVF9BREQiLCJJQkZUU0VUVVBfVklFVyIsIkRBU0hCT0FSRF9VUERBVEUiLCJJQkZUU0VUVVBfQUREIiwiQ1JFRElUUkVRVUVTVF9WSUVXIiwiQkFOS0xJU1RfVklFVyIsIkNIRVFVRUNMRUFSQU5DRV9ERUxFVEUiLCJEQVNIQk9BUkRfQUREIiwiUkVXQVJEX1ZJRVciLCJNT0JJTEVCQU5LSU5HU0VSVklDRVJFUE9SVF9ERUxFVEUiLCJDT09QRVJBVElWRU1BTkFHRU1FTlRfREVMRVRFIiwiUk9MRVNfVVBEQVRFIiwiTUFTVEVSREFUQV9VUERBVEUiLCJSRVBPUlRTX1VQREFURSIsIlVTRVJNQU5BR0VNRU5UX1VQREFURSIsIkNMSUVOVExJTUlUX0FERCIsIk9VVEdPSU5HQ0hFUVVFQ0xFQVJBTkNFU19BREQiLCJSRVBPUlRTX0FERCIsIkNPTU1JU1NJT05fREVMRVRFIiwiQVVUSE9SSVRZX0FERCIsIkNMSUVOVF9WSUVXIiwiVVNFUl9ERUxFVEUiLCJDUkVESVRfUkVRVUVTVF9BREQiLCJVU0VSQUNUSVZJVFlMT0dTX0FERCIsIlNFVFRMRU1FTlRTX0RFTEVURSIsIkFVVEhPUklUWV9VUERBVEUiLCJST0xFX1ZJRVciLCJJQkZUU0VUVVBfVVBEQVRFIiwiUkVXQVJEX1VQREFURSIsIklOQ09NSU5HQ0hFUVVFQ0xFQVJBTkNFU19VUERBVEUiLCJDSEVRVUVDTEVBUkFOQ0VfQUREIiwiUk9MRVVTRVJBU1NJR05NRU5UX1ZJRVciLCJDUkVESVRfUkVRVUVTVF9SRVFVRVNUIiwiU0VUVExFTUVOVF9HTF9TRVRVUF9VUERBVEUiLCJUUkFOU0FDVElPTlJFUE9SVF9BREQiLCJTRVRUTEVNRU5UU19WSUVXIiwiU0VSVklDRUFDVElPTl9WSUVXIiwiQ1JFRElUX1JFUVVFU1RfVVBEQVRFIiwiVFJBTlNBQ1RJT05TX1ZJRVciLCJCTE9DS0VEVVNFUlNfQUREIiwiUk9MRV9VUERBVEUiLCJCTE9DS0VEVVNFUlNfVVBEQVRFIiwiVVNFUlJPTEVfVklFVyIsIlRSQU5TQUNUSU9OU19BREQiLCJTRVJWSUNFQUNUSU9OX0FERCIsIkFVVEhPUklUWV9WSUVXIiwiSU5DT01JTkdDSEVRVUVDTEVBUkFOQ0VTX0FERCIsIkNMSUVOVFVTRVJfVklFVyIsIlNNU1JBVEVfREVMRVRFIiwiQ0xJRU5UVVNFUl9DUkVBVEUiLCJTUE9UQkFOS0lOR1JFUE9SVF9CQU5LSU5HIiwiTS1CQU5LSU5HTUFOQUdFTUVOVF9ERUxFVEUiLCJPVVRHT0lOR0NIRVFVRUNMRUFSQU5DRVNfREVMRVRFIiwiQ0xJRU5UU0VSVklDRU1BUFBJTkdfREVMRVRFIiwiT1VUR09JTkdDSEVRVUVDTEVBUkFOQ0VTX1VQREFURSIsIkhJU1RPUllfQUREIiwiQkFOS1RSQU5TRkVSX1VQREFURSIsIklCRlRTRVRVUF9ERUxFVEUiLCJDT09QRVJBVElWRVNfREVMRVRFIiwiQkxPQ0tFRFVTRVJTX0RFTEVURSIsIk1PQklMRUJBTktJTkdTRVJWSUNFUkVQT1JUX0FERCIsIlNFVFRMRU1FTlRTX1VQREFURSIsIk1FTlVfVklFVyIsIlVUSUxJVFlfQ09NTUlTU0lPTl9TRVRVUF9WSUVXIiwiU0VORF9OT1RJRklDQVRJT05fUkVRIiwiQ0xJRU5UTElNSVRfVVBEQVRFIiwiU0VUVExFTUVOVFNfQUREIiwiU0VUVExFTUVOVF9HTF9TRVRVUF9BREQiLCJDT01NSVNTSU9OX1VQREFURSIsIkNMSUVOVFNFUlZJQ0VNQVBQSU5HX0FERCIsIlVTRVJBVVRIT1JJVFlfREVMRVRFIiwiQ1VTVE9NRVJBR0dSRUdBVEVSRVBPUlRfREVMRVRFIiwiVVNFUkFDVElWSVRZTE9HU19ERUxFVEUiLCJDTElFTlRfVVBEQVRFIiwiUkVNSVRfUkVDT05DSUxJQVRJT05fUkVQT1JUX1VQREFURSIsIlNNU1JBVEVfVklFVyIsIlVUSUxJVFlfQ09NTUlTU0lPTl9TRVRVUF9ERUxFVEUiLCJISVNUT1JZX0RFTEVURSIsIk1BU1RFUkRBVEFfQUREIiwiSElTVE9SWV9WSUVXIiwiVVNFUl9WSUVXIiwiU0VSVklDRUFDVElPTl9ERUxFVEUiLCJDUkVESVRSRVFVRVNUX1VQREFURSIsIlJFTUlUX1JFQ09OQ0lMSUFUSU9OX1JFUE9SVF9WSUVXIiwiU01TUkFURV9BREQiLCJNLUJBTktJTkdNQU5BR0VNRU5UX0FERCIsIk1BU1RFUkRBVEFfVklFVyIsIlNFVFRMRU1FTlRfR0xfU0VUVVBfVklFVyIsIkNSRURJVF9SRVFVRVNUX0RFTEVURSIsIkNVU1RPTUVSQUdHUkVHQVRFUkVQT1JUX1VQREFURSIsIkJMT0NLRURVU0VSU19WSUVXIiwiTUFTVEVSREFUQV9ERUxFVEUiLCJDVVNUT01FUkFHR1JFR0FURVJFUE9SVF9BREQiLCJNT0JJTEVCQU5LSU5HU0VSVklDRVJFUE9SVF9VUERBVEUiLCJVU0VSTUFOQUdFTUVOVF9ERUxFVEUiLCJDSEVRVUVDTEVBUkFOQ0VfVVBEQVRFIiwiU0VUVExFTUVOVF9HTF9TRVRVUF9ERUxFVEUiLCJST0xFU19WSUVXIiwiU01TQ09VTlRSRVBPUlRfQUREIiwiQ09PUEVSQVRJVkVNQU5BR0VNRU5UX1VQREFURSIsIkNSRURJVF9SRVFVRVNUX1ZJRVciLCJVU0VSU19WSUVXIiwiUkVQT1JUU19ERUxFVEUiLCJCQU5LVFJBTlNGRVJfVklFVyIsIlVUSUxJVFlfQ09NTUlTU0lPTl9TRVRVUF9BREQiLCJDTElFTlRTRVJWSUNFTUFQUElOR19WSUVXIiwiQ0xJRU5UTElNSVRfVklFVyIsIlJFTUlUX1JFQ09OQ0lMSUFUSU9OX1JFUE9SVF9ERUxFVEUiLCJVVElMSVRZX0NPTU1JU1NJT05fU0VUVVBfVVBEQVRFIiwiT1VUR09JTkdDSEVRVUVDTEVBUkFOQ0VTX1ZJRVciLCJST0xFU19ERUxFVEUiLCJVU0VSUk9MRV9BREQiLCJDTElFTlRfREVMRVRFIiwiQ0xJRU5UVVNFUl9VUERBVEUiLCJUUkFOU0FDVElPTlNfREVMRVRFIiwiSElTVE9SWV9VUERBVEUiLCJEQVNIQk9BUkRfREVMRVRFIiwiVVNFUlJPTEVfREVMRVRFIiwiTS1CQU5LSU5HTUFOQUdFTUVOVF9VUERBVEUiLCJSRVdBUkRfQUREIiwiQURNSU5fREVMRVRFIiwiUk9MRV9ERUxFVEUiLCJDUkVESVRSRVFVRVNUUkVQT1JUX1ZJRVciLCJDT09QRVJBVElWRVNfQUREIiwiSU5URVJOQUxTVEFGRlJFQ0hBUkdFX1ZJRVciLCJBRE1JTl9VUERBVEUiLCJDTElFTlRTRVJWSUNFTUFQUElOR19VUERBVEUiLCJJTkNPTUlOR0NIRVFVRUNMRUFSQU5DRVNfREVMRVRFIiwiVVNFUkFVVEhPUklUWV9VUERBVEUiLCJDUkVESVRSRVFVRVNUX0FERCIsIlVTRVJBQ1RJVklUWUxPR1NfVVBEQVRFIiwiQ09NTUlTU0lPTl9WSUVXIiwiQ09PUEVSQVRJVkVTX1VQREFURSIsIlNNU1JBVEVfVVBEQVRFIiwiVVNFUk1BTkFHRU1FTlRfQUREIiwiQ09PUEVSQVRJVkVNQU5BR0VNRU5UX0FERCIsIkJBTktUUkFOU0ZFUl9ERUxFVEUiLCJDSEVRVUVDTEVBUkFOQ0VfVklFVyIsIlVTRVJfQUREIiwiSU5DT01JTkdDSEVRVUVDTEVBUkFOQ0VTX1ZJRVciLCJDTElFTlRMSU1JVF9ERUxFVEUiLCJCQU5LVFJBTlNGRVJfQUREIiwiQ0xJRU5UX0NSRUFURSIsIlVTRVJNQU5BR0VNRU5UX1ZJRVciLCJST0xFU19BREQiLCJNLUJBTktJTkdNQU5BR0VNRU5UX1ZJRVciLCJSRVdBUkRfREVMRVRFIiwiQ09PUEVSQVRJVkVTX1ZJRVciLCJBVVRIT1JJVFlfREVMRVRFIiwiU01TQ09VTlRSRVBPUlRfVklFVyIsIkNPT1BFUkFUSVZFTUFOQUdFTUVOVF9WSUVXIiwiVVNFUlJPTEVfVVBEQVRFIiwiUk9MRV9BREQiLCJEQVNIQk9BUkRfVklFVyIsIkNPTU1JU1NJT05fQUREIiwiVVNFUkFVVEhPUklUWV9WSUVXIiwiTU9CSUxFQkFOS0lOR1NFUlZJQ0VSRVBPUlRfVklFVyIsIkNMSUVOVFVTRVJfREVMRVRFIiwiQ1VTVE9NRVJBR0dSRUdBVEVSRVBPUlRfVklFVyIsIlVTRVJBQ1RJVklUWUxPR1NfVklFVyIsIlRSQU5TQUNUSU9OUkVQT1JUX1ZJRVciXSwianRpIjoiMmViMjc2NjYtZjFiMi00MDUyLThkZTktOTllMTM3ZjU4MmJiIiwiY2xpZW50X2lkIjoiY2xpZW50SWQifQ.HMDVOPJhsMy9UynoxOwSg_2I9s4QH4PekjJGbIjx7L7sSbPHQSN6oxH9r-Ejk8J-WxC7RhW3xftTv_PfORTaZK3JgAvg5jdVIWwTRjjy2Bhzd0U8YN330RvmBPEO_9BIhgw-A85csri1VRDdctBErRZXe1u-9ztLIEGlNlPlrOTq8dajdWJMHNHBvQU3c3o_LAVonk7JjiQAxKFiYcjs3Y6q0KtYfG3raVZ39BrCLQmO12EApg3hzK3KigxbDgOqH3cDt-u-X7cu77qBFItgDb8GnhEtC2YnswdSiY8ZfhF0hhg5R6joDKGThu9hmqmkzYTMKU4Iyvmtz5-XoxrLhQ'
            }
        }).then((response) => {
            console.log(response);
            expect(response.status).eq(200);
            const extractOTP = response.body.data.content[0].sms_text;
            otpRegex = extractOTP.match(/OTP code is : (\d+)/)[1];
        })
    });
    it('Pass extracted values to OTP verify Api', () => {
        cy.request({
            method: 'POST',
            url: 'http://172.31.1.20/gateway/otp/verify',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                secret:secretValue,
                otp: otpRegex,
                username: "9848190150",
                databaseId: '713',
                mobileNotificationId: 'MOBILEkahas',
                mobileOs: "ANDROID",
                passwordReset: 'true'
            }
        }).then((response)=>{
            console.log(response);

        })
        
    })  

})