<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request, $limit, $page=1)
    {
        $offset = ($page - 1) * $limit;
        $args = [['status','=',$request->status]];
    
        $total_data = Order::where($args)->get();
        $data = Order::where($args)->offset($offset)
            ->limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data, 'total_data' => $total_data],
            200
        );
    }
    function show($id){
        $data = Order::with('orderdetail','orderdetail.product')->find($id);
     
        
        return response()->json([
            'success' => true,
            'message' => 'thành công',
            'data' => $data,
        
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
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            201
        );
    }
    public function destroy($id)
    {
        $order=Order::find($id+0);
        if($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Không thành công', 'data' => null],
                404
            );
        }
        $order->status = 0;
        $order->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            200
        );
    }
}