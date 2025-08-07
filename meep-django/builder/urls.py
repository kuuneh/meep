from django.urls import path
from .views import custom_login_view, custom_signup_view, CustomConfirmEmailView  # your views


urlpatterns = [
    path('login/', custom_login_view, name='account_login'),
    path('signup/', custom_signup_view, name='account_signup'),
    path(
        "accounts/confirm-email/<key>/",
        CustomConfirmEmailView.as_view(),
        name="account_confirm_email",
    ),
]