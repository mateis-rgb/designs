<?php

function listIt (string $path) {
	$items = scandir($path);

	foreach ($items as $item) {
		if ($item != "." && $item != "..") {
			if (is_file($path . $item)) {
				echo "-> <a href=".$path . $item.">". $item ."</a><br>";
			}
			else {
				echo "--->". $item;
				echo "<div style=\"padding-left: 10px\">";

				listIt($path . $item ."/");

				echo "</div>";
			}
		}
	}
}

echo "<div style=\"padding-left: 10px\">";

listIt("./");

echo "</div>";