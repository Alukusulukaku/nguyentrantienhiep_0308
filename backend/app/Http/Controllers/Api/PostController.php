<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $data = Post::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    function show($id){
        $data = Post::find($id);
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $data],
        200);
    }
    function store(Request $request)
    {
        $post = new Post();
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        //upload image
        $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'),$filename);
            }
        } 

        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->detail = $request->detail; //form
        $post->topic_id = $request->topic_id;
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = $request->user_id;
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            201
        );
    }
    function update(Request $request,$id)
    {
        $post = Post::find($id);
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        //upload image
        $files = $request->image;
        if($files != null){
            if(is_file(public_path('images/post/'.$post->image)))
            {

                unlink(public_path('images/post/'.$post->image));
            }
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'),$filename);
            }
        } 


        $post->type = $request->type; //form
        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->detail = $request->detail; //form
        $post->topic_id = $request->topic_id;
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; //form
        $post->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            201
        );
    }
    public function TrashOrRestore($id, $tos)
    {
        $post=Post::find($id);
        $post->status = $tos;
        $post->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            200
        );
    }
    public function destroy($id)
    {
        $post=Post::find($id);
        if($post==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $post->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $post],
            200
        );
    }
}