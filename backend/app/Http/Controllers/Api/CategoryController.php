<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $data = Category::find(7)->parent;
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function show($id)
    {
        $category = Category::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $category],
            200
        );
    }
    public function getBySlug($slug)
    {
        $args = [['slug', '=', $slug]];
        $category = Category::where($args)->get();
        return response()->json(
            $category,
            200
        );
    }
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if($files != null){
            if(is_file(public_path('images/category/'.$category->image)))
            {

                unlink(public_path('images/category/'.$category->image));
            }
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'),$filename);
            }
        } 
        
        $category->metakey = $request->metakey; //form
        $category->metadesc = $request->metadesc; //form
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = $request->user_id;
        $category->status = $request->status; //form
        if ($request->parent_id !== 0) {
            $category_parent = Category::find($request->parent_id);
            $category_parent->children()->save($category);
        }
        $category->save(); //Luuu vao CSDL



        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if($files != null){
            if(is_file(public_path('images/category/'.$category->image)))
            {

                unlink(public_path('images/category/'.$category->image));
            }
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'),$filename);
            }
        } 
        $category->metakey = $request->metakey; //form
        $category->metadesc = $request->metadesc; //form
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = $request->user_id;
        $category->status = $request->status; //form
        if ($request->parent_id !== 0) {
            $category_parent = Category::find($request->parent_id);
            $category_parent->children()->save($category);
        } else {
            $category->parent_id = $request->parent_id;
        }
        $category->save(); //Luuu vao CSDL

        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            201
        );
    }
    public function category_list($parent_id = 0, $status = 1)
    {
        $args = [

            ['parent_id', '=', $parent_id],
            ['status', '=', $status]
        ];
        $data = Category::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data],
            200
        );
    }
    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $category->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            200
        );
    }
}