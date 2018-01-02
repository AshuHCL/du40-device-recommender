/* import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UnlockStatusConfirmationComponent } from './unlock-status-confirmation.component';
import { ModalService } from '../../common/modal/modal.service';
import { UnlockStatusService } from '../../common/services/unlock-status.service';
import { Observable } from 'rxjs/Observable';
import {Params, ActivatedRoute} from '@angular/router';

class MockUnlockService {
    http: any;
    public data = {
      unlockPortalLabelAndErrorObj: [
        {
          unlockPortalPageHeaderTitle: "Device unlock portal",
          landingPageFirstParagraph:
            "Welcome to device unlock, your step-by-step guide to unlocking AT&T phones, tablets, and mobile hotspots. If you're moving a device to AT&T, be sure to contact your own carrier to unlock it first.",
          landingPageSecondParagraph: "Taking a trip?",
          landingPageThirdParagraph:
            "Did you know that it isn’t always necessary to unlock a device if you’re planning a trip? ",
          landingPageFourthParagraph:
            "Learn how you can use the talk, text & data you already have in over 100 countries with ",
          InternationaldayPassText: "International Day Pass",
          deviceUnlockHelpTitle: "Device unlock help",
          deviceUnlockHelpDescription1:
            "Not sure you have all the info you need? Read the article ",
          deviceUnlockHelpLinkText: "Unlock a device ",
          deviceUnlockHelpDescription2: "if you need help.",
          actionCard: [
            {
              img: "../../../assets/images/ico-unlock-blue-60x45.png",
              unlockyourDevice: "Unlock your device",
              unlockDeviceDescription:
                "Make sure you have the wireless number and IMEI handy. Don't know your IMEI? Dial <b>*#06#</b> on your mobile phone to find it. It may take up to 2 days for us to process your request.",
              link: "../device-unlock"
            },
            {
              img: "../../../assets/images/ico-checkunlock-blue-60x45.png",
              unlockyourDevice: "Check an unlock status",
              unlockDeviceDescription:
                "Make sure you have your IMEI and the unlock confirmation number we emailed you. Check your spam folder if you think you missed our email.",
              link: "./unlock-status"
            }
          ],
          DUEnterYourWirelessNumberStep: "Enter your wireless number",
          DUEnterYourIMEIStep: "Enter your IMEI",
          DUAccountInformationStep: "Account information",
          DUConfirmationStep: "Confirmation",
          introTextBeforeLink: "Be sure you’re",
          modalLinkTxtIntroParagraph: "eligible to unlock",
          introTextAfterLink: "your smartphone, tablet, or mobile hotspot.",
          radioLabel: "Are you an AT&T wireless customer?",
          yesRadioLabel: "Yes",
          noRadioLabel: "No",
          customerTypeError: "Select a customer type option to continue",
          wirelessNumberLabel: " AT&T wireless number",
          wirelessNumberTooltip:
            "Enter the wireless number associated with the account.",
          wirelessNumberRequiredError: "Enter an AT&T Wireless Number.",
          wirelessNumberValidationError:
            "Enter a valid 10-digit AT&T wireless number.",
          acknowledgementTxt: "Yes, I've read the legal stuff and agree to the",
          modalLinkTxt: "device unlock eligibility requirements",
          imeiLabel: "IMEI",
          imeiRequiredError: "Enter an IMEI number.",
          imeiLengthError: "Enter a valid 15-digit IMEI number.",
          ImeiCaptionHelpText:
            "<b>Dial</b> *#06# on your phone to find your IMEI.",
          modalheaderText: "Eligibility requirements",
          closeButtonHeader: "Close",
          closeButtonFooter: "Close",
          modalBodyHeader: "Wireless, business & non-AT&T customers",
          section1title:
            "Requirements for unlocking AT&T phones, tablets, and mobile hotspots.",
          section1listpart2: [
            "Your device isn't reported lost or stolen, or involved with fraud.",
            "You must complete your contract or installment plan (including early termination fees). Or, pay off an installment plan early and then make another unlock request in 24 hours.",
            "Your device isn't active on another AT&T account.",
            "If you upgraded early, wait 14 days to unlock your old device. Business customers wait 30 days. Your service must be active for at least 60 days with no past due or unpaid balance.",
            "AT&T PREPAID<span class='serviceMark'>&#8480;</span> (formerly GoPhone<span class='registeredMark'>&#174;</span>) devices must have at least 6 months of active service.",
            "If you're military, we'll ask you to email your TCS or PCS (Temporary / permanent change of station) documents for eligibility. You won't have to complete installment plans or contracts.",
            "If you have a business-owned device, your company must authorize you to unlock it."
          ],
          ImpNoteTitle: "Look! The important legal stuff.",
          ImpNoteDescp:
            "AT&T reserves the right to deny any unlock request that it concludes would result in an abuse of this policy or is part of an effort to defraud AT&T or its customers. AT&T further reserves the right to alter this unlocking policy at its discretion without advance notice. If during any one month, more than 100 requests are made from a single source, and if more than 10% of those requests are duplicate IMEI numbers, AT&T will no longer process unlock requests from that source.",
          accountHolderFirstnameLabel: "Account holder's first name",
          accountHolderFirstnameRequiredError: "Enter your first name.",
          accountHolderLastnameLabel: "Account holder's last name",
          accountHolderLastnameRequiredError: "Enter your last name.",
          passcodeLabel: "AT&T wireless security passcode",
          passcoderequiredLabel: "(Required if created)",
          passcodeRequiredError: "Please enter valid Account Passcode",
          passcodeErrorValidation: "Enter a valid 4 to 8-digit passcode.",
          forgotPasswordLink: "Forgot your passcode?",
          emailLabel: "Email address",
          emailValidationError: "Enter a valid email address.",
          emailRequiredError: "Enter an email address.",
          confirmEmail: "Enter your email again",
          emailMismatchError: "Email addresses don't match. Try again.",
          militaryPersonalRadiolabel: "Active deployed military personnel?",
          emailHelpText: "We'll send you a link to confirm your unlock request.",
          whatnextTitle: "What's next?",
          whatnextInstructionLine1:
            "We'll send you a link to confirm your unlock request.",
          whatnextInstructionLine2:
            "<strong>Note:</strong> Use it within 24 hours or we'll need to cancel your request.",
          makeLabel: "Make",
          modelLabel: "Model",
          thankUPageTitle: "Thanks! We're emailing you a link.",
          step1ToFollowOnThankUPage:
            "When you get the email, confirm your request within 24 hours.",
          step2ToFollowOnThankUPage:
            "Check your spam folder if you don't see an email from us.",
          step3ToFollowOnThankUPagePart1: "Remember, your request number is",
          step3ToFollowOnThankUPagePart2:
            "Keep it handy in case you need it later.",
          step4ToFollowOnThankUPage:
            "Be sure to use the link we send you within 24 hours or we'll have to cancel this request.",
          unlockPortalIRUHeaderTitle: "Check your unlock status",
          checkstatusIntroTxt:
            "Enter your IMEI and the unlock confirmation number we emailed you. Check your spam folder if you think you missed our email.",
          currentStatusLabel: "Current Status",
          orderPending: "Pending",
          pendingEmailConfirm:
            "<p>Your unlock request is on hold until we receive your confirmation.</p><p>To complete your request, follow the confirmation link in the email we sent you.</p><p><b>Note:</b> If you can't find the email, check your spam folder or <a href='#'>submit a new request</a>.</p>",
          imeiNumberLabel: "IMEI Number",
          requestDateTimeLabel: "Request Date/Time",
          requestNumberStatusLabel: "Request Number",
          deviceUnlockSupportLabel: "Device unlock support",
          checkAnotherUnlockStatusLabel: "Check status of another device",
          submitButton: "Submit",
          backButton: "Back",
          ULP_1010:
            "Looks like this email address is associated with fraud. Please enter a new email address.",
          nextButton: "Next"
        }
      ]
    };

    public unlockJson = {
        "oceUnlockOrderStatusDO": {
          "isOCE": true,
          "orderStatus": "ATTENTION_REQUIRED",
          "unlockStatus": "PENDING",
          "unlockSubStatus": "EMAIL_CONFIRMATION",
          "orderNumber": "CUL71XXX1059703",
          "orderSubmissionDate": "2017-11-22T08:14:32-08:00",
          "orderSubStatus": "EMAIL_CONFIRMATION",
          "accountType": "IRU"
        }
    }
    public UnlockDevice() {
      return Observable.of(this.data);
    }

    public unlockOrderStatus() {
      return Observable.of(this.unlockJson);
    }
  }

  class MockActivatedRoute { 

  }

describe('UnlockStatusConfirmationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnlockStatusConfirmationComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ 
                   ModalService,
                   { provide: UnlockStatusService, useClass: MockUnlockService },
                   { provide: ActivatedRoute, useClass: MockActivatedRoute },
                   {
                    provide: ActivatedRoute,
                    useValue: {                        
                        params: [
                            // subscribe: (fn: (value: Params) => void) => fn({
                            //   imeiNumber: 123456789123456,
                            // }),
                            {
                              imeiNumber: 123456789123456
                            }   
                        ],
                        snapshot: {
                            url: [
                                {
                                    path: 'foo',
                                },
                                {
                                    path: 'bar',
                                },
                                {
                                    path: 'baz',
                                },
                            ],
                        },
                    },
                },
                  //  { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'imeiNumber': 123456789123456 }]) } }
                    ]
    }).compileComponents();
  }));

  it('should create the confirmation component', async(() => {
    const fixture = TestBed.createComponent(UnlockStatusConfirmationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
 */