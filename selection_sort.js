function swap(i, min_index) {
  var temp = div_sizes[i];
  div_sizes[i] = div_sizes[min_index];
  div_sizes[min_index] = temp;

  var temp2 = divs[i].style.height;
  divs[i].style.height = divs[min_index].style.height;
  divs[min_index].style.height = temp2;
}

function Selection_sort() {
  // Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N^2)";

  // Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  for (var i = 0; i < array_size; i++) {
      var min_index = i;

      for (var j = i + 1; j < array_size; j++) {
          div_update(divs[j], div_sizes[j], "yellow"); // Color update

          if (div_sizes[j] < div_sizes[min_index]) {
              if (min_index !== i) {
                  div_update(divs[min_index], div_sizes[min_index], "blue"); // Color update
              }

              min_index = j;

              div_update(divs[min_index], div_sizes[min_index], "red"); // Color update
          } else {
              div_update(divs[j], div_sizes[j], "blue"); // Color update
          }
      }

      if (min_index !== i) {
          swap(i, min_index);
      }

      div_update(divs[i], div_sizes[i], "green"); // Color update
  }

  enable_buttons();
}
