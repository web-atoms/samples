import { AtomUri } from "@web-atoms/core/dist/core/AtomUri";
import { UMD } from "@web-atoms/core/dist/core/types";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
// import { BindableUrlParameter } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";

export default class MenuLinkViewModel extends AtomWindowViewModel {

    // @BindableUrlParameter("url")
    public url: string;

    public pages: any[] = [
        {label: "Auditions", linkgroup: true, img: ""},
        {
            label: "Home",
            value: "@c8private/profile/dist/{platform}/app/Home",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/home_menu.png")
        },
        {
            label: "Messages",
            value: "@c8private/profile/dist/views/mobile/calender/Messages",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/messages.png")
        },
        {
            label: "Breakdowns",
            value: "@c8private/profile/dist/views/mobile/auditions/BreakdownList",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/breakdowns.png")
        },
        {
            label: "Audition Invitations",
            value: "@c8private/profile/dist/views/mobile/auditions/AuditionInvitation",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/AuditionInvitation.png")
        },
        {
            label: "Audition Express",
            value: "@c8private/profile/dist/views/mobile/audition-express/AuditionExpress",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/expressAudition.png")
        },
        {
            label: "Calendar",
            value: "@c8private/profile/dist/views/mobile/calender/CalendarView",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/calender.png")
        },
        {
            label: "Event Tracker",
            value: "@c8private/profile/dist/views/mobile/calender/EventTracker",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/calender.png")
        },
        {
            label: "Project Tracker",
            value: "@c8private/profile/dist/views/mobile/project-tracker/ProjectTracker",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/breakdowns.png")
        },

        {label: "Uploads", linkgroup: true, img: ""},

        {
            label: "Resume Builder",
            value: "@c8private/profile/dist/views/mobile/uploads/resume-builder/ResumeBuilder",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/resumeEditor.png")
        },
        {
            label: "Training",
            value: "@c8private/profile/dist/views/mobile/training/Training",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/trainings.png")
        },
        {
            label: "Photos",
            value: "@c8private/profile/dist/views/mobile/uploads/photos/Photos",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/photos.png")
        },
        {
            label: "Video Reels",
            value: "@c8private/profile/dist/views/mobile/uploads/videos/Videos",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/video.png")
        },
        {
            label: "Video Slate",
            value: "@c8private/profile/dist/views/mobile/uploads/video-slate/VideoSlate",
            img: UMD.resolvePath("@c8private/profile/src/images/claaperboard.png")
        },
        {
            label: "Voice Overs",
            value: "@c8private/profile/dist/views/mobile/uploads/voiceover/VoiceOver",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/voices.png")
        },
        {
            label: "Documents",
            value: "@c8private/profile/dist/views/mobile/uploads/documents/DocumentsList",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/Documents.png")
        },
        // {label: "Pending Uploads", value: "", img: ModuleFiles.src.images.menu.upload_png},
        {label: "Profile", linkgroup: true, img: ""},

        {
            label: "Change Password",
            value: "@c8private/profile/dist/views/mobile/user/ChangePassword",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/password.png")
        },
        // {label: "Contact us", linkgroup: true},
        {
            label: "Email Preferences",
            value: "@c8private/profile/dist/views/mobile/profile/EmailPreferences",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/email_preferances.png")
        },
        {
            label: "Contact Support",
            value: "@c8private/profile/dist/views/mobile/ContactSupportView",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/contactSupport.png")
        },

        {label: "Agency Data", linkgroup: true, img: ""},

        {
            label: "Agency Requirements",
            value: "@c8private/profile/dist/views/mobile/agency/AgencyRequirement",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/requirements.png")
        },
        {
            label: "Union Data",
            value: "@c8private/profile/dist/views/mobile/agency/UnionData",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/unionData.png")
        },
        {
            label: "Conflicts",
            value: "@c8private/profile/dist/views/mobile/agency/Conflicts",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/conflicts.png")
        },
        {
            label: "Agents & Managers",
            value: "@c8private/profile/dist/views/mobile/agency/AgentsManager",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/managers.png")
        },

        {label: "Talent Data", linkgroup: true, img: ""},

        {
            label: "Contact Information",
            value: "@c8private/profile/dist/views/mobile/talent-data/ContactInformation",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/contactInfo.png")
        },
        {
            label: "Nearest Location",
            value: "@c8private/profile/dist/views/mobile/talent-data/NearestLocation",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/nearestLocation.png")
        },
        {
            label: "Miscellaneous",
            value: "@c8private/profile/dist/views/mobile/talent-data/Miscellaneous",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/miscellaneous.png")
        },
        {
            label: "Privacy Settings",
            value: "@c8private/profile/dist/views/mobile/talent-data/PrivacySettings",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/privacySettings.png")
        },
        // {label: "Contact us", linkgroup: true},

        // {label: "Contact Support", value: ModuleFiles.views.mobile.ContactSupportView, },
        {label: "Appearance", linkgroup: true, img: ""},
        {
            label: "Appearance",
            value: "@c8private/profile/dist/views/mobile/appearance/Appearance",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/appearance.png")
        },
        {
            label: "Clothing Sizes",
            value: "@c8private/profile/dist/views/mobile/appearance/ClothingSizes",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/clothingSizes.png")
        },
        {
            label: "Personality & Appearance",
            value: "@c8private/profile/dist/views/mobile/appearance/PersonalityAppearance",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/personality.png")
        },

        {label: "Skills", linkgroup: true, img: ""},

        {
            label: "Talent Categories",
            value: "@c8private/profile/dist/views/mobile/skills/TalentCategories",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/talentCategories.png")
        },
        {
            label: "Languages & Accents",
            value: "@c8private/profile/dist/views/mobile/skills/LanguagesAccents",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/languagesAccents.png")
        },
        {
            label: "Specialized Training",
            value: "@c8private/profile/dist/views/mobile/skills/SpecializedTraining",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/specializedTraining.png")
        },
        {
            label: "Sports",
            value: "@c8private/profile/dist/views/mobile/skills/Sports",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/sports.png")
        },
        {
            label: "Music",
            value: "@c8private/profile/dist/views/mobile/skills/Music",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/music.png")
        },
        {
            label: "Dance",
            value: "@c8private/profile/dist/views/mobile/skills/Dance",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/music.png")
        },

        {label: "About", linkgroup: true, img: ""},

        {
            label: "FAQ",
            value: "@c8private/profile/dist/views/mobile/about/FAQ",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/FAQ.png")
        },
        {
            label: "Privacy Policy",
            value: "@c8private/profile/dist/views/mobile/about/PrivacyPolicy",
            img: UMD.resolvePath("@c8private/profile/src/images/menu/Privacy-polocy.png")
        },

        {label: "Logout", linkgroup: true, img: ""},
        {label: "Logout", value: "Logout",  img: UMD.resolvePath("@c8private/profile/src/images/menu/logOut.png")}
    ];

    @Inject
    private navigationService: NavigationService;

    public async openUrl(url: string): Promise<void> {
        if (!url) {
            return;
        }
        const model = this.pages.find((x) => x.value === url) as any;
        const a = new AtomUri(url);
        a.query.canGoBack = false;
        a.query.title = model ? model.label : "800 Casting";
        // this.broadcast("root-page", url);
        this.app.runAsync(() => this.navigationService.openPage(a.toString(), null, {
            target: "root",
            clearHistory: true
        }));

        this.app.callLater(() => {
            this.close();
        });
    }
}
