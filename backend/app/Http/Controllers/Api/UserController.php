<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index($roles)
    {
        $args = [['roles', '=', $roles]];
        $data = User::where($args)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->pass;
        $args = [['username', 'LIKE' ,'%'.$username.'%']];
        $data = User::where($args)->first();
       
        if ($data) {
            $hashedPassword = $data->password;
            // Hash::check($password, $hashedPassword)
            if ($password == $hashedPassword) {
                return response()->json(
                    ['success' => true, 'message' => 'Đăng nhập thành công', 'data' => $data],
                    200
                );
            } else {
                return response()->json(
                    ['success' => false, 'message' => 'Tài khoản hoặc mật khẩu sai'],
                    200
                );
            }
        }
        return response()->json(
            ['success' => false, 'message' => 'Tài khoản hoặc mật khẩu sai'],
            200
        );
    }
    public function show($id)
    {

        $data = User::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $data],
            200
        );
    }
    public function store(Request $request)
    {
        $args = [['email', '=', $request->email]];
        $args2 = [['username', '=', $request->username]];
        $data = User::where($args)->orWhere($args2)->get();
        if (count($data) > 0) {
            return response()->json(['success' => false, 'message' => 'Email hoac SDT da duoc dang ky']);
        } else {
            $user = new User();
            $user->name = $request->name; //form
            $user->email = $request->email; //form
            $user->phone = $request->phone; //form
            //upload image
            $files = $request->image;
            if ($files != null) {
                $extension = $files->getClientOriginalExtension();
                if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                    $filename = $user->slug . '.' . $extension;
                    $user->image = $filename;
                    $files->move(public_path('images/user'), $filename);
                }
            }

            $user->username = $request->username; //form
            $user->password = Hash::make($request->password); //form
            $user->address = $request->address; //form
            $user->roles = $request->roles; //form
            $user->created_at = date('Y-m-d H:i:s');
            $user->created_by = 1;
            $user->status = $request->status; //form
            $user->save(); //Luuu vao CSDL
            return response()->json(
                ['success' => true, 'message' => 'Thành công', 'data' => $user],
                201
            );
        }
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name; //form
        //upload image
        $files = $request->image;
        if ($files != null) {
            if (is_file(public_path('images/user/' . $user->image))) {

                unlink(public_path('images/user/' . $user->image));
            }
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg', 'svg'])) {
                $filename = $user->username . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->address = $request->address; //form
        $user->roles = $request->roles; //form
        $user->updated_at = date('Y-m-d H:i:s');
        $user->updated_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $user],
            201
        );
    }
    public function destroy($id)
    {
        $post = User::find($id);
        if ($post == null) {
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