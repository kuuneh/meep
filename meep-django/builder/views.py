from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.views.decorators.csrf import csrf_protect
@csrf_protect
def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            return redirect("/")  # or dashboard etc.
        else:
            return render(request, "login/index.html", { "error": "Invalid credentials" })

    return render(request, "login/index.html")