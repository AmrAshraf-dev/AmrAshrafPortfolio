part of 'values.dart';

class CertificationData {
  CertificationData({
    required this.title,
    required this.image,
    required this.imageSize,
    required this.url,
    required this.awardedBy,
  });

  final String image;
  final double imageSize;
  final String url;
  final String title;
  final String awardedBy;
}

class NoteWorthyProjectDetails {
  NoteWorthyProjectDetails({
    required this.projectName,
    required this.isOnPlayStore,
    required this.isPublic,
    required this.technologyUsed,
    required this.isWeb,
    required this.isLive,
    this.projectDescription,
    this.playStoreUrl,
    this.webUrl,
    this.hasBeenReleased,
    this.gitHubUrl,
  });

  final String projectName;
  final bool isPublic;
  final bool isOnPlayStore;
  final bool isWeb;
  final String? projectDescription;
  final bool isLive;
  final bool? hasBeenReleased;
  final String? playStoreUrl;
  final String? gitHubUrl;
  final String? webUrl;
  final String? technologyUsed;
}

class ExperienceData {
  ExperienceData({
    required this.position,
    required this.roles,
    required this.location,
    required this.duration,
    required this.company,
    this.companyUrl,
  });

  final String company;
  final String? companyUrl;
  final String location;
  final String duration;
  final String position;
  final List<String> roles;
}

class SkillData {
  SkillData({
    required this.skillName,
    required this.skillLevel,
  });

  final String skillName;
  final double skillLevel;
}

class SubMenuData {
  SubMenuData({
    required this.title,
    this.isSelected,
    this.content,
    this.skillData,
    this.isAnimation = false,
  });

  final String title;
  final String? content;
  final List<SkillData>? skillData;
  bool isAnimation;
  bool? isSelected;
}

class Data {
  static List<NavItemData> menuItems = [
    NavItemData(name: StringConst.HOME, route: StringConst.HOME_PAGE),
    NavItemData(name: StringConst.ABOUT, route: StringConst.ABOUT_PAGE),
    NavItemData(name: StringConst.WORKS, route: StringConst.WORKS_PAGE),
    NavItemData(
      name: StringConst.EXPERIENCE,
      route: StringConst.EXPERIENCE_PAGE,
    ),
    // NavItemData(
    //name: StringConst.CERTIFICATIONS,
    //route: StringConst.CERTIFICATION_PAGE,
    // ),
    // NavItemData(name: StringConst.CONTACT, route: StringConst.CONTACT_PAGE),
  ];

  static List<SocialData> socialData = [
    SocialData(
      name: StringConst.GITHUB,
      iconData: FontAwesomeIcons.github,
      url: StringConst.GITHUB_URL,
    ),
    SocialData(
      name: StringConst.LINKED_IN,
      iconData: FontAwesomeIcons.linkedin,
      url: StringConst.LINKED_IN_URL,
    ),
    SocialData(
      name: StringConst.WHATSAPP,
      iconData: FontAwesomeIcons.whatsapp,
      url: StringConst.WHATSAPP_URL,
    ),
  ];

  static List<String> mobileTechnologies = [
    "Android",
    "Flutter",
    "Dart",
    "Java",
  ];

  static List<String> otherTechnologies = [
    "OOP",
    "SOLID principles",
    "C/C++",
    "AI Integration",
    "Chatbots",
    "Image Analysis",
    "MVC",
    "MVP",
    "MVVM",
    "Clean Arch.",
    "Git",
    "Github",
    "Gitlab",
    "Provider",
    "Bloc/Cubit",
    "Azure",
    "Restful APIs",
    "Firebase",
    "Oracle",
    "SqLite",
    "Algorithms",
    "SQL",
    "Data structure",
    "Firebase",
    "Figma",
    "Adobe XD",
    "CI/CD",
    "Security",
    "Privacy",
    "C#",
  ];
  static List<SocialData> socialData1 = [
    SocialData(
      name: StringConst.GITHUB,
      iconData: FontAwesomeIcons.github,
      url: StringConst.GITHUB_URL,
    ),
    SocialData(
      name: StringConst.LINKED_IN,
      iconData: FontAwesomeIcons.linkedin,
      url: StringConst.LINKED_IN_URL,
    ),
  ];

  static List<SocialData> socialData2 = [
    SocialData(
      name: StringConst.LINKED_IN,
      iconData: FontAwesomeIcons.linkedin,
      url: StringConst.LINKED_IN_URL,
    ),
    SocialData(
      name: StringConst.WHATSAPP,
      iconData: FontAwesomeIcons.telegram,
      url: StringConst.WHATSAPP_URL,
    ),
  ];

  static List<ProjectItemData> recentWorks = [
    Projects.BEAUTY_DOZ,
    Projects.KUWAIT_FUND,
    Projects.SAFEROAD,
    Projects.ADOODLZ,
    Projects.ALRASHID,
    // Projects.BEATEM,
    // Projects.ONEDICE,
  ];

  static List<ProjectItemData> projects = [
    Projects.BEAUTY_DOZ,
    Projects.KUWAIT_FUND,
    Projects.SAFEROAD,
    Projects.ADOODLZ,
    Projects.ALRASHID,
    Projects.BEATEM,
    Projects.ONEDICE,
    //Projects.OTP_TEXT_FIELD,
    // Projects.AERIUM,
    // Projects.AERIUM_V2,
    // Projects.OUTFITR,
  ];

  static List<NoteWorthyProjectDetails> noteworthyProjects = [
    NoteWorthyProjectDetails(
      projectName: StringConst.e_commerce_app_flutter,
      isPublic: true,
      isOnPlayStore: false,
      isWeb: false,
      technologyUsed: StringConst.e_commerce_app_flutter,
      projectDescription: StringConst.e_commerce_app_flutter_DETAIL,
      gitHubUrl: StringConst.e_commerce_app_flutter_GITHUB_URL,
      isLive: false,
    ),
    NoteWorthyProjectDetails(
      projectName: StringConst.recipeAPP,
      isPublic: true,
      isOnPlayStore: false,
      isWeb: false,
      technologyUsed: StringConst.recipeAPP,
      projectDescription: StringConst.recipeAPP_DETAIL,
      gitHubUrl: StringConst.recipeAPP_GITHUB_URL,
      isLive: false,
    ),
    NoteWorthyProjectDetails(
      projectName: StringConst.MENU_QR,
      isPublic: true,
      isOnPlayStore: false,
      isWeb: false,
      technologyUsed: StringConst.PYTHON,
      projectDescription: StringConst.MENU_QR_DETAIL,
      gitHubUrl: StringConst.MENU_QR_GITHUB_URL,
      isLive: false,
    ),
    // NoteWorthyProjectDetails(
    //   projectName: StringConst.PROGRAMMING_FOR_DATA_SCIENCE,
    //   isPublic: true,
    //   isOnPlayStore: false,
    //   isWeb: false,
    //   technologyUsed: StringConst.PYTHON,
    //   projectDescription: StringConst.PROGRAMMING_FOR_DATA_SCIENCE_DETAIL,
    //   gitHubUrl: StringConst.PROGRAMMING_FOR_DATA_SCIENCE_GITHUB_URL,
    //   isLive: false,
    // ),
    // NoteWorthyProjectDetails(
    //   projectName: StringConst.ONBOARDING_APP,
    //   isPublic: true,
    //   isOnPlayStore: false,
    //   isWeb: false,
    //   technologyUsed: StringConst.FLUTTER,
    //   projectDescription: StringConst.ONBOARDING_APP_DETAIL,
    //   gitHubUrl: StringConst.ONBOARDING_APP_GITHUB_URL,
    //   isLive: false,
    // ),
    // NoteWorthyProjectDetails(
    //   projectName: StringConst.FINOPP,
    //   isPublic: true,
    //   isOnPlayStore: false,
    //   isWeb: false,
    //   technologyUsed: StringConst.FLUTTER,
    //   projectDescription: StringConst.FINOPP_DETAIL,
    //   gitHubUrl: StringConst.FINOPP_GITHUB_URL,
    //   isLive: false,
    // ),
    // NoteWorthyProjectDetails(
    //   projectName: StringConst.AMOR_APP,
    //   isPublic: true,
    //   isOnPlayStore: false,
    //   isWeb: true,
    //   technologyUsed: StringConst.FLUTTER,
    //   projectDescription: StringConst.AMOR_APP_DETAIL,
    //   gitHubUrl: StringConst.AMOR_APP_GITHUB_URL,
    //   webUrl: StringConst.AMOR_APP_WEB_URL,
    //   isLive: true,
    // ),
  ];

  static List<CertificationData> certificationData = [
    CertificationData(
      title: StringConst.MSC_IT,
      url: StringConst.CMU_CERT_URL,
      image: ImagePath.CMU_MASTERS_CERT,
      imageSize: 0.325,
      awardedBy: StringConst.CMU,
    ),
    CertificationData(
      title: StringConst.ASSOCIATE_ANDROID_DEV,
      url: StringConst.ASSOCIATE_ANDROID_DEV_URL,
      image: ImagePath.ASSOCIATE_ANDROID_DEV,
      imageSize: 0.325,
      awardedBy: StringConst.GOOGLE,
    ),
    CertificationData(
      title: StringConst.CLOUD_DEVELOPER,
      url: StringConst.CLOUD_DEVELOPER_URL,
      image: ImagePath.CLOUD_DEVELOPER_CERT,
      imageSize: 0.325,
      awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      title: StringConst.DATA_SCIENCE,
      url: StringConst.DATA_SCIENCE_CERT_URL,
      image: ImagePath.DATA_SCIENCE_CERT,
      imageSize: 0.325,
      awardedBy: StringConst.UDACITY,
    ),
    CertificationData(
      title: StringConst.ANDROID_BASICS,
      url: StringConst.ANDROID_BASICS_CERT_URL,
      image: ImagePath.ANDROID_BASICS_CERT,
      imageSize: 0.325,
      awardedBy: StringConst.UDACITY,
    ),
  ];

  static List<ExperienceData> experienceData = [
    ExperienceData(
      company: StringConst.COMPANY_5,
      position: StringConst.POSITION_5,
      companyUrl: StringConst.COMPANY_5_URL,
      roles: [
        StringConst.COMPANY_5_ROLE_1,
        StringConst.COMPANY_5_ROLE_2,
        StringConst.COMPANY_5_ROLE_3,
      ],
      location: StringConst.LOCATION_5,
      duration: StringConst.DURATION_5,
    ),
    ExperienceData(
      company: StringConst.COMPANY_4,
      position: StringConst.POSITION_4,
      companyUrl: StringConst.COMPANY_4_URL,
      roles: [
        StringConst.COMPANY_4_ROLE_1,
        StringConst.COMPANY_4_ROLE_2,
        StringConst.COMPANY_4_ROLE_3,
      ],
      location: StringConst.LOCATION_4,
      duration: StringConst.DURATION_4,
    ),
    ExperienceData(
      company: StringConst.COMPANY_3,
      position: StringConst.POSITION_3,
      companyUrl: StringConst.COMPANY_3_URL,
      roles: [
        StringConst.COMPANY_3_ROLE_1,
        StringConst.COMPANY_3_ROLE_2,
        StringConst.COMPANY_3_ROLE_3,
      ],
      location: StringConst.LOCATION_3,
      duration: StringConst.DURATION_3,
    ),
    ExperienceData(
      company: StringConst.COMPANY_2,
      position: StringConst.POSITION_2,
      companyUrl: StringConst.COMPANY_2_URL,
      roles: [
        StringConst.COMPANY_2_ROLE_1,
        StringConst.COMPANY_2_ROLE_2,
        StringConst.COMPANY_2_ROLE_3,
      ],
      location: StringConst.LOCATION_2,
      duration: StringConst.DURATION_2,
    ),
  ];
}

class Projects {
  //BEAUTY_DOZ
  static ProjectItemData BEAUTY_DOZ = ProjectItemData(
      title: StringConst.BEAUTY_DOZ,
      subtitle: StringConst.BEAUTY_DOZ,
      platform: StringConst.BEAUTY_DOZ_PLATFORM,
      primaryColor: AppColors.disneyPlus,
      image: ImagePath.beautyDoz,
      coverUrl: ImagePath.beautyDoz3,
      navSelectedTitleColor: AppColors.flutterCatalogSelectedNavTitle,
      appLogoColor: AppColors.flutterCatalogAppLogo,
      projectAssets: [
        ImagePath.beautyDoz,
        ImagePath.beautyDoz1,
        ImagePath.beautyDoz2,
        ImagePath.beautyDoz3,
        ImagePath.beautyDoz4,
        ImagePath.beautyDoz5,
      ],
      category: StringConst.BEAUTY_DOZ_CATEGORY,
      portfolioDescription: StringConst.BEAUTY_DOZ_DETAIL,
      isPublic: true,
      isOnPlayStore: true,
      isOnAppleStore: true,
      technologyUsed: StringConst.FLUTTER,
      gitHubUrl: StringConst.BEAUTY_DOZ_GITHUB_URL,
      playStoreUrl: StringConst.BEAUTY_DOZ_PLAYSTORE_URL,
      appleStoreUrl: StringConst.BEAUTY_DOZ_APPLESTORE_URL);

  //KUWAIT_FUND
  static ProjectItemData KUWAIT_FUND = ProjectItemData(
      title: StringConst.KUWAIT_FUND,
      subtitle: StringConst.KUWAIT_FUND,
      platform: StringConst.KUWAIT_FUND_PLATFORM,
      primaryColor: AppColors.flutter_catalog,
      image: ImagePath.KUWAIT_FUND_COVER,
      coverUrl: ImagePath.KUWAIT_FUND_COVER,
      navSelectedTitleColor: AppColors.flutterCatalogSelectedNavTitle,
      appLogoColor: AppColors.flutterCatalogAppLogo,
      projectAssets: [
        ImagePath.KUWAIT_FUND_SCREENS,
        ImagePath.KUWAIT_FUND_1,
        ImagePath.KUWAIT_FUND_2,
        ImagePath.KUWAIT_FUND_3,
        ImagePath.KUWAIT_FUND_4,
        //ImagePath.KUWAIT_FUND_5,
      ],
      category: StringConst.KUWAIT_FUND_CATEGORY,
      portfolioDescription: StringConst.KUWAIT_FUND_DETAIL,
      isPublic: true,
      isOnPlayStore: true,
      isOnAppleStore: true,
      technologyUsed: StringConst.FLUTTER,
      gitHubUrl: StringConst.KUWAIT_FUND_GITHUB_URL,
      playStoreUrl: StringConst.KUWAIT_FUND_PLAYSTORE_URL,
      appleStoreUrl: StringConst.KUWAIT_FUND_APPLESTORE_URL);

  //SAFEROAD
  static ProjectItemData SAFEROAD = ProjectItemData(
    title: StringConst.SAFEROAD,
    subtitle: StringConst.SAFEROAD,
    platform: StringConst.SAFEROAD_PLATFORM,
    primaryColor: AppColors.grey,
    image: ImagePath.SAFEROAD_COVER,
    category: StringConst.SAFEROAD_CATEGORY,
    //designer: StringConst.SAFEROAD_DESIGNER,
    coverUrl: ImagePath.SAFEROAD_COVER,
    navTitleColor: AppColors.dropNavTitle,
    navSelectedTitleColor: AppColors.dropSelectedNavTitle,
    appLogoColor: AppColors.dropAppLogo,
    projectAssets: [
      ImagePath.SAFEROAD_COVER,
      ImagePath.SAFEROAD,
      ImagePath.SAFEROAD1,
      ImagePath.SAFEROAD2,
      ImagePath.SAFEROAD3,
      ImagePath.SAFEROAD4,
      ImagePath.SAFEROAD5,
      ImagePath.SAFEROAD6,
      ImagePath.DROP_THANKS,
    ],
    portfolioDescription: StringConst.SAFEROAD_DETAIL,
    isPublic: true,
    isOnPlayStore: true,
    isOnAppleStore: false,
    technologyUsed: StringConst.ANDROID,
    gitHubUrl: StringConst.SAFEROAD_GITHUB_URL,
    playStoreUrl: StringConst.SAFEROAD_PLAYSTORE_URL,
  );
//ADOODLZ
  static ProjectItemData ADOODLZ = ProjectItemData(
    title: StringConst.ADOODLZ,
    subtitle: StringConst.ADOODLZ,
    primaryColor: AppColors.roam,
    category: StringConst.ADOODLZ_CATEGORY,
    //designer: StringConst.ADOODLZ_DESIGNER,
    platform: StringConst.ADOODLZ_PLATFORM,
    image: ImagePath.ADOODLZ_COVER,
    coverUrl: ImagePath.ADOODLZ_COVER,
    navTitleColor: AppColors.roamNavTitle,
    navSelectedTitleColor: AppColors.roamSelectedNavTitle,
    appLogoColor: AppColors.roamAppLogo,
    projectAssets: [
      ImagePath.ADOODLZ_COVER,
      ImagePath.ADOODLZ_HOME,
      ImagePath.ADOODLZ_EXPLORE,
      ImagePath.ADOODLZ_PROFILE,
      ImagePath.ADOODLZ3,
      ImagePath.ADOODLZ4,
      ImagePath.ADOODLZ5,
      ImagePath.ADOODLZ7,
    ],
    portfolioDescription: StringConst.ADOODLZ_DETAIL,
    isPublic: true,
    isOnPlayStore: false,
    technologyUsed: StringConst.FLUTTER,
    gitHubUrl: StringConst.ADOODLZ_GITHUB_URL,
    // playStoreUrl: StringConst.ADOODLZ_PLAYSTORE_URL,
  );
  //ALRASHID
  static ProjectItemData ALRASHID = ProjectItemData(
      title: StringConst.ALRASHID,
      primaryColor: AppColors.login_catalog,
      subtitle: StringConst.ALRASHID,
      category: StringConst.ALRASHID_CATEGORY,
      platform: StringConst.ALRASHID_PLATFORM,
      image: ImagePath.ALRASHID_COVER,
      coverUrl: ImagePath.ALRASHID_COVER,
      portfolioDescription: StringConst.ALRASHID_DETAIL,
      navTitleColor: AppColors.loginCatalogNavTitle,
      navSelectedTitleColor: AppColors.loginCatalogSelectedNavTitle,
      appLogoColor: AppColors.loginCatalogAppLogo,
      projectAssets: [
        ImagePath.ALRASHID_COVER,
        ImagePath.ALRASHID1,
        ImagePath.ALRASHID2,
        ImagePath.ALRASHID3,
        ImagePath.ALRASHID4,
        ImagePath.ALRASHID5,
        ImagePath.ALRASHID6,
        ImagePath.ALRASHID7,
        ImagePath.ALRASHID8,
        ImagePath.ALRASHID9,
        ImagePath.ALRASHID10,
        ImagePath.ALRASHID11,
        ImagePath.ALRASHID12,
        ImagePath.ALRASHID13,
        ImagePath.ALRASHID14,
        ImagePath.ALRASHID15,
      ],
      isPublic: true,
      isOnPlayStore: true,
      isOnAppleStore: true,
      technologyUsed: StringConst.FLUTTER,
      gitHubUrl: StringConst.ALRASHID_GITHUB_URL,
      playStoreUrl: StringConst.ALRASHID_PLAYSTORE_URL,
      appleStoreUrl: StringConst.ALRASHID_APPLESTORE_URL);

  //BEATEM
  static ProjectItemData BEATEM = ProjectItemData(
    title: StringConst.BEATEM,
    subtitle: StringConst.BEATEM_SUBTITLE,
    category: StringConst.BEATEM_CATEGORY,
    //designer: StringConst.BEATEM_DESIGNER,
    primaryColor: Colors.green, //AppColors.outfitr,
    platform: StringConst.BEATEM_PLATFORM,
    image: ImagePath.BEATEM_COVER,
    coverUrl: ImagePath.BEATEM_COVER,
    navTitleColor: AppColors.foodybiteNavTitle,
    navSelectedTitleColor: AppColors.foodybiteSelectedNavTitle,
    appLogoColor: AppColors.foodybiteAppLogo,
    projectAssets: [
      ImagePath.BEATEM_COVER,
      ImagePath.BEATEM1,
      ImagePath.BEATEM2,
      ImagePath.BEATEM3,
      ImagePath.BEATEM4,
      ImagePath.BEATEM5,
      ImagePath.BEATEM6,
      ImagePath.BEATEM7,
      ImagePath.BEATEM8,
      ImagePath.BEATEM9,
      ImagePath.BEATEM10,
      ImagePath.BEATEM11,
      ImagePath.BEATEM12,
      ImagePath.BEATEM13,
      ImagePath.BEATEM14,
      ImagePath.BEATEM15,
      ImagePath.BEATEM16,
      ImagePath.BEATEM17,
      ImagePath.BEATEM18,
      ImagePath.BEATEM19,
      ImagePath.BEATEM20,
      ImagePath.BEATEM21,
      ImagePath.BEATEM22,
    ],
    portfolioDescription: StringConst.BEATEM_DETAIL,
    isPublic: true,
    isOnPlayStore: false,
    technologyUsed: StringConst.FLUTTER,
    gitHubUrl: StringConst.BEATEM_GITHUB_URL,
    //playStoreUrl: StringConst.BEATEM_PLAYSTORE_URL,
  );

  //ONEDICE
  static ProjectItemData ONEDICE = ProjectItemData(
    title: StringConst.ONEDICE,
    subtitle: StringConst.ONEDICE_SUBTITLE,
    primaryColor: AppColors.ONEDICE,
    platform: StringConst.ONEDICE_PLATFORM,
    category: StringConst.ONEDICE_CATEGORY,
    //designer: StringConst.NIMBUS_DESIGNER,
    image: ImagePath.ONEDICE,
    coverUrl: ImagePath.ONEDICE_COVER,
    navTitleColor: AppColors.ONEDICENavTitle,
    navSelectedTitleColor: AppColors.ONEDICESelectedNavTitle,
    projectAssets: [
      ImagePath.ONEDICE,
      ImagePath.ONEDICE1,
      ImagePath.ONEDICE2,
      ImagePath.ONEDICE3,
      ImagePath.ONEDICE4,
      ImagePath.ONEDICE5,
      ImagePath.ONEDICE6,
      ImagePath.ONEDICE7,
      ImagePath.ONEDICE8,
      ImagePath.ONEDICE9,
      ImagePath.ONEDICE10,
      ImagePath.ONEDICE11,
      ImagePath.ONEDICE12,
      ImagePath.ONEDICE13,
      ImagePath.ONEDICE14,
      ImagePath.ONEDICE15,
      ImagePath.ONEDICE16,
      ImagePath.ONEDICE17,
      ImagePath.ONEDICE18,
      ImagePath.ONEDICE19,
      ImagePath.ONEDICE20,
      ImagePath.ONEDICE21,
      ImagePath.ONEDICE22,
      ImagePath.ONEDICE23,
    ],
    portfolioDescription: StringConst.ONEDICE_DETAIL,
    isPublic: true,
    isOnPlayStore: false,
    isLive: false,
    technologyUsed: StringConst.FLUTTER,
    gitHubUrl: StringConst.ONEDICE_GITHUB_URL,
    //webUrl: StringConst.NIMBUS_WEB_URL,
  );
  static ProjectItemData OTP_TEXT_FIELD = ProjectItemData(
    title: StringConst.OTP_TEXT_FIELD,
    subtitle: StringConst.OTP_TEXT_FIELD_SUBTITLE,
    category: StringConst.OTP_TEXT_FIELD_CATEGORY,
    primaryColor: AppColors.otp_package,
    platform: StringConst.OTP_TEXT_FIELD_PLATFORM,
    image: ImagePath.OTP_TEXTFIELD_COVER,
    coverUrl: ImagePath.OTP_TEXTFIELD_COVER,
    portfolioDescription: StringConst.OTP_TEXT_FIELD_DETAIL,
    navTitleColor: AppColors.otpPackageNavTitle,
    navSelectedTitleColor: AppColors.otpPackageSelectedNavTitle,
    appLogoColor: AppColors.otpPackageAppLogo,
    isPublic: true,
    isLive: true,
    technologyUsed: StringConst.FLUTTER,
    gitHubUrl: StringConst.OTP_TEXT_FIELD_GITHUB_URL,
    webUrl: StringConst.OTP_TEXT_FIELD_WEB_URL,
  );
  static ProjectItemData AERIUM = ProjectItemData(
    title: StringConst.AERIUM,
    subtitle: StringConst.AERIUM_SUBTITLE,
    primaryColor: AppColors.aerium_v1,
    platform: StringConst.AERIUM_PLATFORM,
    category: StringConst.AERIUM_CATEGORY,
    designer: StringConst.AERIUM_DESIGNER,
    image: ImagePath.AERIUM_COVER,
    coverUrl: ImagePath.AERIUM_COVER,
    navTitleColor: AppColors.aeriumV1NavTitle,
    projectAssets: [
      ImagePath.AERIUM_COVER,
      ImagePath.AERIUM_DESIGN_2,
      ImagePath.AERIUM_DESIGN_3,
    ],
    portfolioDescription: StringConst.AERIUM_DETAIL,
    isPublic: true,
    isLive: true,
    technologyUsed: StringConst.FLUTTER,
    gitHubUrl: StringConst.AERIUM_GITHUB_URL,
    webUrl: StringConst.AERIUM_WEB_URL,
  );
  static ProjectItemData AERIUM_V2 = ProjectItemData(
    title: StringConst.AERIUM_V2,
    subtitle: StringConst.AERIUM_V2_SUBTITLE,
    category: StringConst.AERIUM_V2_CATEGORY,
    designer: StringConst.AERIUM_V2_DESIGNER,
    primaryColor: AppColors.aerium_v1,
    platform: StringConst.AERIUM_V2_PLATFORM,
    image: ImagePath.AERIUM_V2_LAST,
    coverUrl: ImagePath.AERIUM_V2_LAST,
    portfolioDescription: StringConst.AERIUM_V2_DETAIL,
    projectAssets: [
      ImagePath.AERIUM_V2_OVERALL,
      ImagePath.AERIUM_V2_FIRST,
      ImagePath.AERIUM_V2_TYPOGRAPHY,
      ImagePath.AERIUM_V2_LAST,
    ],
    isPublic: true,
    isLive: true,
    technologyUsed: StringConst.FLUTTER,
    gitHubUrl: StringConst.AERIUM_V2_GITHUB_URL,
    webUrl: StringConst.AERIUM_V2_WEB_URL,
  );
  static ProjectItemData OUTFITR = ProjectItemData(
    title: StringConst.OUTFITR,
    subtitle: StringConst.OUTFITR_SUBTITLE,
    category: StringConst.OUTFITR_CATEGORY,
    primaryColor: AppColors.outfitr,
    platform: StringConst.OUTFITR_PLATFORM,
    image: ImagePath.OUTFITR_COVER,
    coverUrl: ImagePath.OUTFITR_1,
    portfolioDescription: StringConst.OUTFITR_DETAIL,
    navTitleColor: AppColors.outfitrNavTitle,
    navSelectedTitleColor: AppColors.outfitrSelectedNavTitle,
    appLogoColor: AppColors.outfitrAppLogo,
    projectAssets: [
      ImagePath.OUTFITR_2,
      ImagePath.OUTFITR_4,
      ImagePath.OUTFITR_5,
      ImagePath.OUTFITR_6,
    ],
    isPublic: true,
    technologyUsed: StringConst.FLUTTER,
    gitHubUrl: StringConst.OUTFITR_GITHUB_URL,
    webUrl: StringConst.OUTFITR_WEB_URL,
  );
}
