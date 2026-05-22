from rest_framework.decorators import api_view
from rest_framework.response import Response

users = []

@api_view(['POST'])
def signup(request):

    data = request.data

    user = {
        "id": len(users) + 1,
        "username": data.get('username'),
        "email": data.get('email'),
        "password": data.get('password')
    }

    users.append(user)

    return Response({
        "message": "User created"
    })


@api_view(['POST'])
def login(request):

    email = request.data.get('email')
    password = request.data.get('password')

    for user in users:

        if (
            user['email'] == email and
            user['password'] == password
        ):

            return Response({
                "token": "mock-token"
            })

    return Response({
        "message": "Invalid credentials"
    }, status=400)