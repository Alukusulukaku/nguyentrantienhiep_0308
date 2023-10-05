<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\ProductImage;
use Illuminate\Support\Str;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index($status, $limit, $page = 1)
    {
        $args = [["status", "=", $status]];
        $offset = ($page - 1) * $limit;
        $total_data = Product::where($args)->get();
        $data = Product::where($args)->offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }

    public function getProducts($limit)
    {
        $args = [['status', '=', 1]];
        $data = Category::with('product_available', 'product_available.brand')->where($args)->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function test()
    {
        $data = Product::with('brand')->get();


        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $products = Product::where('status', '=', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }

    public function show($id)
    {
        $product = Product::with('category', 'brand')->find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $product],
            200
        );
    }


    public function store(Request $request)
    {
        $product = new Product();

        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }

        $files1 = $request->back_image;
        if ($files1 != null) {
            $extension1 = $files1->getClientOriginalExtension();
            if (in_array($extension1, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename1 = $product->slug . '_back' . '.' . $extension1;
                $product->back_image = $filename1;
                $files1->move(public_path('images/product_back'), $filename1);
            }
        }




        $product->price = $request->price; //form
        $product->qty = $request->qty; //form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->description = $request->description; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; //form
        $product->brand_id = $request->brand_id;
        $product->category_id = $request->category_id;
        $product->save(); //Luuu vao CSDL


        $images = $request->images;
        if (count($images) != 0) {
            foreach ($images as $img) {
                $files2 = $img;
                $randomNumber = random_int(0, 99999);
                $product_img = new ProductImage();
                $product_img->product_id = $product->id;
                $extension = $files2->getClientOriginalExtension();
                if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                    $filename = $product->slug . "_" . $randomNumber . '.' . $extension;
                    $product_img->image = $filename;
                    $files2->move(public_path('images/productImg'), $filename);
                }
                $product_img->save();
            }
        }
        


        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            if (is_file(public_path('images/product/' . $product->image))) {

                unlink(public_path('images/product/' . $product->image));
            }
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }

        $files1 = $request->back_image;
        if ($files1 != null) {
            if (is_file(public_path('images/product_back/' . $product->back_image))) {

                unlink(public_path('images/product_back/' . $product->back_image));
            }
            $extension1 = $files1->getClientOriginalExtension();
            if (in_array($extension1, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename1 = $product->slug . '.' . $extension1;
                $product->back_image = $filename1;
                $files1->move(public_path('images/product_back'), $filename1);
            }
        }


        $product->brand_id = $request->brand_id; //form
        $product->preview = $request->preview; //form
        $product->price = $request->price; //form
        $product->qty = $request->qty; //form
        $product->price_sale = $request->price_sale; //form
        $product->category_id = $request->category_id; //form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->detail = $request->detail; //form
        $product->updated_at = date('Y-m-d H:i:s');
        $product->updated_by = 1;
        $product->status = $request->status; //form

        $images = $request->images;
        if (count($images) != 0) {
            $productimg = ProductImage::where('product_id', $id);
            foreach ($productimg as $item) {
                if (is_file(public_path('images/productImg/' . $item->image))) {

                    unlink(public_path('images/productImg/' . $item->image));
                }
            }
            $productimg->delete();
            foreach ($images as $img) {
                $files2 = $img;
                $randomNumber = random_int(0, 99999);
                $product_img = new ProductImage();
                $product_img->product_id = $id;
                $extension = $files2->getClientOriginalExtension();
                if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                    $filename = $product->slug . "_" . $randomNumber . '.' . $extension;
                    $product_img->image = $filename;
                    $files2->move(public_path('images/productImg'), $filename);
                }
                $product_img->save();
            }
        }
        $product->save(); //Luuu vao CSDL


        $product->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            201
        );
    }
    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        if (is_file(public_path('images/product_back/' . $product->back_image))) {

            unlink(public_path('images/product_back/' . $product->back_image));
        }
        $productimg = ProductImage::where('product_id', $id);
        foreach ($productimg as $item) {
            if (is_file(public_path('images/productImg/' . $item->image))) {

                unlink(public_path('images/productImg/' . $item->image));
            }
        }
        $productimg->delete();
        $product->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
}