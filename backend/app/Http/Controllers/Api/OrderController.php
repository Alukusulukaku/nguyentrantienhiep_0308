<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $data = Order::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    function show($id){
        $data = Order::find($id);
        $data_detail = $data->orderdetail;
        return response()->json([
            'success' => true,
            'message' => 'thành công',
            'data' => $data,
            'data_detail' => $data_detail
        ],
        200);
    }
    function store(Request $request){
        
        $data = $request->all();
        $user = $data['user'];
        
        $order = new Order();
        $order->user_id = $user['user_id'];
        $order->name = $user['name'];
        $order->phone = $user['phone'];
        $order->email = $user['email'];
        $order->address = $user['address'];
        $order->note = $user['note'];
        $order->created_at = date('Y-m-d H:i:s');
        $order->status = 2;
        $order->save();

        $product = $data['product'];
        foreach($product as $p){
            $orderdetail = new OrderDetail();
            $product = Product::find($p['id']);
            $orderdetail->price = $p['price'];
            $orderdetail->qty = $p['qty'];
            $orderdetail->order()->associate($order->id);
            $orderdetail->product()->associate($product->id);
            $orderdetail->save();
            
        }
        
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'order' => $order],
            201
        );
    }
    public function destroy($id)
    {
        $order=Order::find($id+0);
        if($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $args = [['order_id','=', $id]];
        OrderDetail::where($args)->delete();
        $order->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            200
        );
    }
}