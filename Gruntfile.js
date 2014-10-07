(function() {


    module.exports = function(grunt) {
        grunt.initConfig({


            clean : {
                destination : {
                    src : [ "dest/**/*.html~"]
                }
            },

            emailBuilder: {
                emailToGmail: {
                    options: {
                        encodeSpecialChars: false,

                        emailTest: {
                            email: 'emmlopez@gmail.com',
                            subject: 'ink newsletter',
                            transport: {
                                type: 'SMTP',
                                options: {
                                    service: 'Gmail',
                                    auth: {
                                        user: 'emmlopez@gmail.com',
                                        pass: 'drako00@'
                                    }
                                }
                            }

                        }

                    },
                    files: {
                        'dest/wishlist_price_alert_email_inline.html' : 'newsletter-email-template (1)/newsletter.html'
                    }
                },
                emailToOutlook: {
                    options: {
                        encodeSpecialChars: false,


                        emailTest: {
                            email: 'iphone.adr@outlook.com',
                            subject: 'Minty',
                            transport: {
                                type: 'SMTP',
                                options: {
                                    service: 'Gmail',
                                    auth: {
                                        user: 'emmlopez@gmail.com',
                                        pass: 'drako00@'
                                    }
                                }
                            }

                        }



                    },
                    files: {
                        'dest/ouput.html' : 'Minty/index.html'
                    }
                },
                emailToYahoo: {
                    options: {
                        encodeSpecialChars: false,


                        emailTest: {
                            email: 'address.iphone@yahoo.com',
                            subject: 'Alert from grunt',
                            transport: {
                                type: 'SMTP',
                                options: {
                                    service: 'Gmail',
                                    auth: {
                                        user: 'emmlopez@gmail.com',
                                        pass: 'drako00@'
                                    }
                                }
                            }

                        }


                    },
                    files: {
                        'dest/ouput.html' : 'src/wishlist_price_alert_email_inline.html'
                    }
                },
                produce: {
                    files: {
                        'dest/wishlist_price_alert_email_OutPut.html' : 'src/index.html'
                    },
                    options: {
                        encodeSpecialChars: true
                    }
                }
            },

            uncss: {
                dist: {
                    src: ['src/wishlist_price_alert_email_inline.html'],
                    dest: 'dist/css/tidy.css',
                    options: {
                        report: 'min' // optional: include to report savings
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-email-builder');
        grunt.loadNpmTasks('grunt-uncss');


        grunt.registerTask('default', 'emailBuilder:produce');
        grunt.registerTask('test', [ 'clean', 'emailBuilder:produce', 'nodeunit']);
        return grunt.registerTask('sendtoAll', ['emailBuilder:emailToYahoo', 'emailBuilder:emailToOutlook', 'emailBuilder:emailToGmail']);
    };



}).call(this);