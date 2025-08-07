from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-mc=#p_qm#vsasdpyn!0g6w30z%$a*&l+4-qhnq%b!oyfrqi&^i'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    'meep.wtf',
    'login.meep.wtf',
    '.meep.wtf',  # for all subdomains including username.meep.wtf
    'localhost',
    '127.0.0.1',
]
# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Your app(s)
    'builder',

    # CORS
    'corsheaders',
    # Required by allauth
    "django.contrib.sites",

    # Allauth
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be at the top
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "allauth.account.middleware.AccountMiddleware",
]

ROOT_URLCONF = 'meep.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],  # Your custom templates folder here
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'meep.wsgi.application'

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',  # Replace with Postgres or MySQL later
        'NAME': r'D:\db.sqlite3',
    }
}
SITE_ID = 1

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",  # required for admin
    "allauth.account.auth_backends.AuthenticationBackend",
]
# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
ACCOUNT_LOGIN_METHODS = {'email'}
ACCOUNT_SIGNUP_FIELDS = ['email*', 'password1', 'password2']
ACCOUNT_FORMS = {
    'signup': 'builder.forms.CustomSignupForm',
}
LOGIN_REDIRECT_URL = '/'  # or your home page url name
ACCOUNT_LOGOUT_REDIRECT_URL = 'https://meep.wtf/'
AUTH_USER_MODEL = "builder.CustomUser"
# Optional extras
ACCOUNT_DEFAULT_HTTP_PROTOCOL = "https"
ACCOUNT_EMAIL_VERIFICATION = "mandatory"  # or "mandatory"
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_LOGIN_ATTEMPTS_LIMIT = 5
ACCOUNT_LOGIN_ATTEMPTS_TIMEOUT = 300
#email stuffs
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = '/accounts/email-confirmed/'
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = '/accounts/email-confirmed/'
EMAIL_HOST_USER = 'login.meep@gmail.com'
EMAIL_HOST_PASSWORD = 'XXXXXXXXXXXXX'
ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = False  # Ensure users aren't auto-logged-in
ACCOUNT_LOGIN_ON_PASSWORD_RESET = False
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
# CORS
SESSION_COOKIE_DOMAIN = ".meep.wtf"   # Allow cookie across all subdomains
CSRF_COOKIE_DOMAIN = ".meep.wtf"      # Also allow CSRF token to be valid across subdomains
CSRF_TRUSTED_ORIGINS = [
    "https://login.meep.wtf",
    "https://api.meep.wtf",
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files
STATIC_URL = 'https://static.meep.wtf/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'
# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
