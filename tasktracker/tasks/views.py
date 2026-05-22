from django.shortcuts import render


from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.

mock_tasks = []

@api_view(['GET','POST'])
def tasks(request):

    # if request.method == 'GET':

    #     status = request.GET.get('status')
    #     if status:
    #         tasklist = Task.objects.filter(status=status)
    #     else:
    #         tasklist = Task.objects.all()
        
    #     serializers = TaskSerializer(tasklist,many=True)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
        
    #     return Response(serializer.errors)

    if request.method == 'GET':
        return Response(mock_tasks)
    data = request.data

    task = {
            "id": len(mock_tasks) +1,
            "title":data.get('title'),
            "description": data.get('description'),
            "status": data.get('status')

        }

    mock_tasks.append(task)
    return Response(task)

@api_view(['PUT','DELETE'])
def tasks_detail(request,pk):
    task = Task.objects.get(id=pk)

    if request.method == 'PUT':

        serializer = TaskSerializer(task,data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors) 

    task.delete()

    return Response ({'message':'Deleted'})
        

