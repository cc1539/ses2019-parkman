$data = $_GET['data'];
$list = glob($data.'*.*');
echo json_encode($list);