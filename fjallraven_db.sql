-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3307
-- Thời gian đã tạo: Th10 11, 2023 lúc 03:16 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `fjallraven_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Fjallraven', 'fjallraven', 'fjallraven.jpg', 'das', 'dasd', '2023-09-28 04:39:32', '2023-10-03 21:08:56', 1, 1, 1),
(13, 'sarfsdafdsa', 'sarfsdafdsa', 'sarfsdafdsa.jpeg', 'fadsfdas', 'fadsfdasf', '2023-10-02 10:24:08', '2023-10-02 10:24:08', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_cart`
--

CREATE TABLE `db_cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` tinyint(3) UNSIGNED NOT NULL,
  `product_id` tinyint(3) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `image`, `slug`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Kånken', 'kanken.jpg', 'kanken', 0, 'ok', 'ok', '2023-09-22 00:44:24', '2023-10-08 22:38:56', 1, 1, 1),
(12, 'Backpacks & bags', 'backpacks-bags.png', 'backpacks-bags', 0, 'laptop-bags', 'laptop-bags', '2023-10-05 03:40:32', '2023-10-08 22:39:04', 1, 1, 1),
(13, 'Accessories', 'accessories.jpg', 'accessories', 0, 'accessories', 'accessories', '2023-10-08 22:42:00', '2023-10-09 06:27:15', 1, 1, 1),
(14, 'Tent & sleeping bags', 'tent-sleeping-bags.webp', 'tent-sleeping-bags', 0, 'tent', 'tent', '2023-10-08 22:43:05', '2023-10-08 22:43:05', 1, NULL, 1),
(15, 'Kånken bags', NULL, 'kanken-bags', 1, 'kanken-bags', 'kanken-bags', '2023-10-09 06:13:17', '2023-10-09 06:13:17', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone` varchar(1000) NOT NULL,
  `zalo` varchar(1000) NOT NULL,
  `facebook` varchar(1000) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `youtube` varchar(1000) NOT NULL,
  `metadesc` varchar(1000) NOT NULL,
  `metakey` varchar(1000) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 2,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_contact`
--

INSERT INTO `db_contact` (`id`, `name`, `email`, `phone`, `title`, `content`, `created_at`, `updated_at`, `status`) VALUES
(1, 'test', 'tao@gmail.com', '09432432', 'Phan hoi', 'Phan hoi', '2023-10-03 04:46:30', '2023-10-02 22:26:26', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `path` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `path`, `parent_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(5, 'Kånken', '#', 0, '2023-10-04 10:09:28', '2023-10-04 10:09:28', 1, NULL, 1),
(6, 'Kånken bags', '/category/kanken-bags/1', 5, '2023-10-04 10:11:38', '2023-10-09 06:55:53', 1, 1, 1),
(7, 'Kånken accessories', '/category/kanken-accessories/1', 5, '2023-10-04 10:12:26', '2023-10-09 06:56:03', 1, 1, 1),
(8, 'Backpacks & bags', '#', 0, '2023-10-04 10:44:17', '2023-10-04 10:44:17', 1, NULL, 1),
(9, 'Daypacks', '/category/daypacks/1', 8, '2023-10-04 10:48:34', '2023-10-09 06:56:13', 1, 1, 1),
(10, 'Laptop bags', '/category/laptop-bags/1', 8, '2023-10-04 10:52:20', '2023-10-04 10:52:20', 1, NULL, 1),
(11, 'Shoulder bags', '/category/shoulder-bags/1', 8, '2023-10-04 10:53:37', '2023-10-04 10:53:37', 1, NULL, 1),
(12, 'Trekking backpacks', '/category/trekking-backpacks/1', 8, '2023-10-04 10:59:31', '2023-10-04 10:59:31', 1, NULL, 1),
(13, 'Hunting backpacks', '/category/hunting-backpacks/1', 8, '2023-10-04 11:01:43', '2023-10-04 11:01:43', 1, NULL, 1),
(14, 'Mountaineering backpacks', '/category/mountaineering-backpacks', 8, '2023-10-04 11:02:14', '2023-10-04 11:02:14', 1, NULL, 1),
(15, 'Travel bags', '/category/travel-bags/1', 8, '2023-10-04 11:02:34', '2023-10-04 11:02:34', 1, NULL, 1),
(16, 'Hip packs', '/category/hip-packs/1', 8, '2023-10-04 11:07:43', '2023-10-04 11:07:43', 1, NULL, 1),
(17, 'Shop now', '/category', 0, '2023-10-09 06:40:39', '2023-10-09 06:40:39', 1, NULL, 1),
(18, 'News', '/news', 0, '2023-10-09 06:41:07', '2023-10-09 06:41:07', 1, NULL, 1),
(19, 'Contact us', '/contact-us', 0, '2023-10-10 22:27:44', '2023-10-10 22:27:44', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, 0, 'hiep', '34314', 'tao@gmail.com', '413431', '234234', '2023-09-21 14:29:46', '2023-09-21 14:29:46', NULL, 2),
(10, 1, 'hiep', '0123456', 'deptrai@gmail.com', 'cmm', '423', '2023-09-22 02:11:59', '2023-09-22 02:11:59', NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `price`, `qty`) VALUES
(1, 10, 1, 5000.00, 10),
(2, 10, 2, 3213.00, 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `image` varchar(1000) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` double(8,2) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `back_image` varchar(1000) NOT NULL,
  `description` mediumtext NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `image`, `back_image`, `description`, `metakey`, `metadesc`, `created_by`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, 1, 1, 'tao', 'taw', 3124.00, 'img.png', 'img.png', 'vd', 'gfds', 'sdfg', 0, '2023-09-22 08:45:15', '2023-09-22 08:45:15', NULL, 2),
(2, 1, 1, 'gfds', 'gsfd', 43234.00, 'i4mg.png', 'im43g.png', 'vd423', 'gfdsaer', 'sdfgfsd', 0, '2023-09-22 08:45:15', '2023-09-22 08:45:15', NULL, 2),
(11, 15, 1, 'xcvbxcvb', 'xcvbxcvb', 123.00, 'xcvbxcvb.jpg', 'xcvbxcvb_back.jpg', '21312', '213', '123', 1, '2023-10-05 01:27:22', '2023-10-05 01:27:22', NULL, 1),
(15, 15, 13, 'RÄVEN 28', 'raven-28', 120.00, 'raven-28.jpg', 'raven-28_back.jpg', 'Simple and hardwearing 28L backpack with great organizing possibilities. Separate Laptop compartment for laptops up to 15”. Large main compartment with a zippered inside security pocket. It also has a zippered front compartment with mesh organizer pockets inside, a fleece-lined top pocket and a padded air mesh back panel with comfortable shoulder straps. Robust leather handle at the top. Made from durable G-1000 HeavyDuty, this is a perfect backpack for commuting and everyday outdoor life.', 'yes', 'yes', 1, '2023-10-05 03:42:14', '2023-10-05 03:42:14', NULL, 1),
(16, 1, 1, 'Skule 28', 'skule-28', 95.00, 'skule-28.webp', 'skule-28_back.jpg', 'This 28L backpack is perfect for everyday trips to school or work and just as suitable for day hikes. Made from hardwearing, water-repellent Oxford fabric in recycled polyester. It has an easily accessed top pocket and a zippered main compartment with a padded 15” laptop sleeve. Spacious front compartment with inside zippered pocket and mesh organizing pockets. Comfortable back panel with air mesh, padded shoulder straps and adjustable chest strap.', 'skule 28', 'skule 28', 1, '2023-10-05 03:44:25', '2023-10-05 03:44:25', NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_productsale`
--

CREATE TABLE `db_productsale` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `pricesale` double NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `date_begin` timestamp NULL DEFAULT NULL,
  `date_end` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_productstore`
--

CREATE TABLE `db_productstore` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_product_img`
--

CREATE TABLE `db_product_img` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` tinyint(3) UNSIGNED NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_product_img`
--

INSERT INTO `db_product_img` (`id`, `product_id`, `image`) VALUES
(3, 15, 'raven-28_93865.jpg'),
(4, 15, 'raven-28_36806.jpg'),
(5, 15, 'raven-28_64126.jpg'),
(6, 15, 'raven-28_22760.jpg'),
(7, 15, 'raven-28_68873.jpg'),
(8, 16, 'skule-28_62806.jpg'),
(9, 16, 'skule-28_36887.jpg'),
(10, 16, 'skule-28_8635.webp'),
(11, 16, 'skule-28_47522.webp'),
(12, 16, 'skule-28_11491.jpg'),
(13, 16, 'skule-28_28753.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_slider`
--

CREATE TABLE `db_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `path` varchar(1000) NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_slider`
--

INSERT INTO `db_slider` (`id`, `name`, `image`, `path`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(69, 'Kanken restocked!', 'kanken-restocked.jpg', '/products/search/kanken', 'sliders', '2023-10-02 09:42:03', '2023-10-02 09:42:03', 1, NULL, 1),
(75, 'Kanken family is here!', 'kanken-family-is-here.jpg', '/products/search/kanken', 'sliders', '2023-10-05 01:53:39', '2023-10-05 01:53:39', 1, NULL, 1),
(76, 'New mountain products', 'new-mountain-products.webp', '/products/search/mountain', 'sliders', '2023-10-05 06:13:35', '2023-10-05 06:13:35', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_users`
--

CREATE TABLE `db_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_users`
--

INSERT INTO `db_users` (`id`, `name`, `email`, `phone`, `username`, `password`, `address`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'hiep', 'asdf@gmail.com', '12312412', 'hiepdeptrai123', '123123', 'sau nha', '1', '2023-09-23 09:26:24', NULL, 0, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_wishlist`
--

CREATE TABLE `db_wishlist` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` tinyint(3) UNSIGNED NOT NULL,
  `product_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_wishlist`
--

INSERT INTO `db_wishlist` (`id`, `user_id`, `product_id`) VALUES
(1, 1, 1),
(3, 1, 2),
(4, 1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(3, '2023_09_21_061535_create_brand_table', 1),
(4, '2023_09_21_061548_create_category_table', 1),
(5, '2023_09_21_061553_create_contact_table', 1),
(6, '2023_09_21_061629_create_menu_table', 1),
(7, '2023_09_21_061634_create_order_table', 1),
(9, '2023_09_21_061640_create_product_table', 1),
(10, '2023_09_21_061643_create_post_table', 1),
(11, '2023_09_21_061647_create_slider_table', 1),
(12, '2023_09_21_061710_create_users_table', 1),
(13, '2023_09_21_061725_create_cart_table', 2),
(14, '2023_09_21_061815_create_product_img_table', 2),
(16, '2023_09_21_061850_create_wishlist_table', 3),
(18, '2023_09_21_061637_create_orderdetail_table', 4),
(20, '2023_10_11_101934_create_productstore_table', 5),
(21, '2023_10_11_101943_create_productsale_table', 6),
(22, '2023_10_11_101951_create_config_table', 6),
(23, '2023_10_11_101927_create_topic_table', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_cart`
--
ALTER TABLE `db_cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_productstore`
--
ALTER TABLE `db_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_product_img`
--
ALTER TABLE `db_product_img`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_slider`
--
ALTER TABLE `db_slider`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_users`
--
ALTER TABLE `db_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_users_email_unique` (`email`),
  ADD UNIQUE KEY `db_users_username_unique` (`username`);

--
-- Chỉ mục cho bảng `db_wishlist`
--
ALTER TABLE `db_wishlist`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `db_cart`
--
ALTER TABLE `db_cart`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `db_config`
--
ALTER TABLE `db_config`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `db_productsale`
--
ALTER TABLE `db_productsale`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_productstore`
--
ALTER TABLE `db_productstore`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_product_img`
--
ALTER TABLE `db_product_img`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `db_slider`
--
ALTER TABLE `db_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT cho bảng `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_users`
--
ALTER TABLE `db_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `db_wishlist`
--
ALTER TABLE `db_wishlist`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
