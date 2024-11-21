from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework import generics, permissions


@api_view(['POST'])
def register(request):
    print(request.data)
    regdata = UserSerialiser(data=request.data)
    if regdata.is_valid():
        regdata.save()
        return Response({'status':1,"values":regdata.data})
    else:
        return Response({'status':0,"values":"faield"})


@api_view(['POST'])
def loginfn(request):
    print(request.data)
    username = request.data.get("username")
    password = request.data.get("password")
    user = User.objects.get(username=username, password=password)
    if user is not None:
        user_data = UserSerialiser(user).data
        return Response({'status': 1, 'values': user_data})
    else:
        return Response({'status': 0, 'values': "Login failed. Invalid credentials"})


@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'GET':
        
        posts = Post.objects.all().order_by('-created_at')
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def view_item(req):
    if req.query_params:
        item=Post.objects.filter(**req.query_params.dict())
    else:  
        item=Post.objects.all()
    if item:
        serializer=PostSerializer(item,many=True)
        return Response({'data':serializer.data})
    else:
        return Response({'value':'not exists'})



@api_view(['POST'])
def update_item(req):
    item=Post.objects.get(pk=req.data['id'])
    data=PostSerializer(instance=item,data=req.data)

    if data.is_valid():
        data.save()
        return Response({'status':1,'value':data.data})
    return Response({'status':0,'value':'invalid'})




@api_view(['DELETE'])
def delete(req,id):
    item=Post.objects.get(id=id)
    item.delete()
    return Response({'status':1,'value':'deleted'})