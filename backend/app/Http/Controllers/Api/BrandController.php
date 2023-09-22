<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $data = Brand::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function show($id)
    {
        $brand = Brand::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $brand],
            200
        );
    }
    public function store(Request $request)
    {
        $brand = new Brand();
        $brand->name = $request->name; //form
        $brand->slug = Str::of($request->name)->slug('-');
        // $brand->image = $request->name;
        $files = $request->image;
        if($files != null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'),$filename);
            }
        } 
        $brand->metakey = $request->metakey; //form
        $brand->metadesc = $request->metadesc; //form
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = $request->user_id;
        $brand->status = $request->status; //form
        $brand->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $brand],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $brand = Brand::find($id);
        $brand->name = $request->name; //form
        $brand->slug = Str::of($request->name)->slug('-');
        // $brand->image = $request->name;
        $files = $request->image;
        if($files != null){
            if(is_file(public_path('images/brand/'.$brand->image)))
            {

                unlink(public_path('images/brand/'.$brand->image));
            }
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension, ['jpg','png','gif','webp','jpeg','svg'])){
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'),$filename);
            }
        } 
        $brand->metakey = $request->metakey; //form
        $brand->metadesc = $request->metadesc; //form
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->updated_by = $request->user_id;
        $brand->status = $request->status; //form
        $brand->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $brand],
            200
        );
    }
    public function destroy($id)
    {
        $brand=Brand::find($id);
        if($brand==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $brand->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $brand],
            200
        );
}
}