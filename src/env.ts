export const viteCollectionsUrl = import.meta.env.VITE_COLLECTIONS_URL;

type Language = "hawaiian" | "samoan" | "english";
export const viteLanguage: Language = import.meta.env.VITE_LANGUAGE || "english";

export const viteLogoWidth = import.meta.env.VITE_LOGO_WIDTH;
export const viteLogoUrlLight = import.meta.env.VITE_LOGO_URL_LIGHT;
export const viteLogoUrlDark = import.meta.env.VITE_LOGO_URL_DARK;

export const viteDictionaryUrl = import.meta.env.VITE_DICTIONARY_URL;

export const viteDictionaryAllowedOrigins = (JSON.parse(
  import.meta.env.VITE_DICTIONARY_ALLOWED_ORIGINS,
) || []) as string[];

export const viteNavDrawerUrl = import.meta.env.VITE_NAV_DRAWER_URL;

export const viteNavDrawerAllowedOrigins = (JSON.parse(
  import.meta.env.VITE_NAV_DRAWER_ALLOWED_ORIGINS,
) || []) as string[];

export const viteNavDrawerAllowedDestinations = (JSON.parse(
  import.meta.env.VITE_NAV_DRAWER_ALLOWED_DESTINATIONS,
) || []) as string[];

// Buttons
export const viteEnableNavLogo = import.meta.env.VITE_ENABLE_NAV_LOGO;
export const viteEnableThemeButton = import.meta.env.VITE_ENABLE_THEME_BUTTON;
export const viteEnablePrintButton = import.meta.env.VITE_ENABLE_PRINT_BUTTON;
export const viteEnableFontSizeButton = import.meta.env.VITE_ENABLE_FONT_SIZE_BUTTON;
export const viteEnableNavDrawerButton = import.meta.env.VITE_ENABLE_NAV_DRAWER_BUTTON;
export const viteEnableDictionaryButton = import.meta.env.VITE_ENABLE_DICTIONARY_BUTTON;
export const viteEnableOrthographyButton = import.meta.env.VITE_ENABLE_ORTHOGRAPHY_BUTTON;
export const viteEnableUnmarkedOrthographyLevelsButton = import.meta.env.VITE_ENABLE_UNMARKED_ORTHOGRAPHY_LEVELS_BUTTON;
export const viteEnableUnmarkedOrthographySettingsButton = import.meta.env.VITE_ENABLE_UNMARKED_ORTHOGRAPHY_SETTINGS_BUTTON;
