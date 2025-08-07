from allauth.account.forms import LoginForm, SignupForm
from .forms import CustomSignupForm
from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login
def custom_login_view(request):
    form = LoginForm(request=request, data=request.POST or None)
    if request.method == 'POST' and form.is_valid():
        # Authenticate and log the user in using form.login()
        user = form.login(request)  # ✅ this handles authentication and rate limiting
        return redirect('https://www.youtube.com')     # redirect after successful login
    return render(request, 'login/index.html', {'form': form})

def custom_signup_view(request):
    form = CustomSignupForm(data=request.POST or None)
    if request.method == 'POST' and form.is_valid():
        user = form.save(request)
        from allauth.account.utils import complete_signup
        from allauth.account import app_settings
        return complete_signup(
            request,
            user,
            app_settings.EMAIL_VERIFICATION,
            None
        )
    return render(request, 'signup/index.html', {'form': form})

from allauth.account.views import ConfirmEmailView

class CustomConfirmEmailView(ConfirmEmailView):
    def post(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        return redirect('/accounts/email-confirmed/')