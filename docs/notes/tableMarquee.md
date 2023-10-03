# TableMarquee

> 基于 jQuery 进行了表格滚动的开发

## HTML 内容

```html
<div style="height: 200px" id="test"></div>
<script>
  /*
   * 数据格式
   * 对象中包含item和title两个键值对
   * item为数组格式，放入表格内容。若为多级标题表格，在二级标题数组中最后一位增加一条数据——'th'
   * title为一级标题内容
   */
  let _data = {
    item: [
      ['上海中山医疗科技发展公司', 5, 7, 12, 15, '', 2, '', '', '', 11],
      ['上海中山医疗科技发展公司', 5, 7, 12, 15, '', 2, '', '', '', 11],
    ],
    title: ['机构', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
  };

  // 调用方法
  window.addEventListener('load', function () {
    marquee('test', _data, false);
  });
</script>
```

## SCSS 样式

```scss
/* 定义颜色 */
$borderColor: #000; //边框颜色
$titleBgColor: #000; //表头背景色
$titleColor: #fff; //表头字体颜色
$tableColor: #000; //表格字体颜色

/* 表格样式 */
.tablebox {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: auto;
  font-size: 1.2vh;

  .tbl-header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    border-collapse: collapse;

    thead {
      background: $titleBgColor;
    }
  }

  .tbl-body {
    border-collapse: collapse;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  table {
    width: 100%;
    table-layout: inherit;
    border: 1px solid $borderColor;

    th,
    td {
      line-height: 2;
      border: 1px solid $borderColor;
    }

    th {
      color: $titleColor;
    }

    td {
      color: $tableColor;
    }

    tr {
      th {
        cursor: pointer;
        font-weight: bold;
      }

      td {
        border: none;
        padding: 0 1.5%;
        vertical-align: middle;
        word-wrap: break-word;
        border: 1px solid $borderColor;
      }
    }
  }
}
```

## TableMarquee 方法

```js
/**
 * @description: 表格无缝滚动功能，基于jQuery
 * @param {*} id 需要渲染的div的ID
 * @param {*} data 数据。JSON格式
 * @param {*} isMarquee 是否滚动。默认为TRUE
 * @param {*} speedhq 速度。数值越大越慢。默认20
 * @param {*} cancelMarquee 鼠标移动后是否暂停。默认为TRUE
 * @return {*}
 */
function marquee(id, data, isMarquee, speedhq, cancelMarquee) {
  let html = '';
  // 固定层布局
  html += '<div class="tablebox"><div class="tbl-header"><table border="0" cellspacing="0" cellpadding="0"><thead><tr>';
  // 固定层增加标题栏
  for (let i in data.title) {
    html += '<th>' + data.title[i] + '</th>';
  }
  html += '</tr></thead><tbody style="opacity: 0"></tbody></table></div>';
  // 滚动层布局
  html += '<div class="tbl-body"><table border="0" cellspacing="0" cellpadding="0"><thead><tr>';
  // 滚动层增加标题栏
  for (let i in data.title) {
    html += '<th>' + data.title[i] + '</th>';
  }
  html += '</tr></thead><tbody></tbody></table></div></div>';

  // 根据所传ID渲染画面
  document.getElementById(id).innerHTML = html;

  let str = '';
  let _str = '';
  let MyMarhq = '';
  // 置空表格
  clearInterval(MyMarhq);
  $('#' + id + ' .tbl-body tbody').empty();
  $('#' + id + ' .tbl-header tbody').empty();

  // 遍历总数据
  $.each(data.item, function (i, item) {
    // console.log(item.pop());
    if (item[item.length - 1] == 'th') {
      let ele = item.pop();
      // 置空_str，防止重复生成
      _str = '';
      // 遍历每条数据中所有的value
      $.each(item, function (p, element) {
        // console.log(element);
        _str += '<' + ele + '>' + element + '</' + ele + '>';
      });
      str += '<tr>' + _str + '</tr>';
      return;
    }
    // 置空_str，防止重复生成
    _str = '';
    // 遍历每条数据中所有的value
    $.each(item, function (p, element) {
      // console.log(element);
      _str += '<td>' + element + '</td>';
    });
    str += '<tr>' + _str + '</tr>';
  });

  // 增加数据
  $('#' + id + ' .tbl-body tbody').append(str);
  $('#' + id + ' .tbl-header tbody').append(str);
  $('#' + id + ' .tbl-header tbody td').css('border-color', 'rgba(0,0,0,0)');
  $('#' + id + ' .tbl-header tbody th').css('border-color', 'rgba(0,0,0,0)');
  // 控制是否滚动
  if (isMarquee !== false) {
    $('#' + id + ' .tbl-body tbody').html($('#' + id + ' .tbl-body tbody').html() + $('#' + id + ' .tbl-body tbody').html());
    $('#' + id + ' .tbl-body').css('top', '0');
    let tblTop = 0;
    let outerHeight = $('#' + id + ' .tbl-body tbody')
      .find('tr')
      .outerHeight();

    function Marqueehq() {
      if (tblTop <= -outerHeight * data.item.length) {
        tblTop = 0;
      } else {
        tblTop -= 1;
      }
      $('#' + id + ' .tbl-body').css('top', tblTop + 'px');
    }

    MyMarhq = setInterval(Marqueehq, speedhq == undefined ? 20 : speedhq);
    // 鼠标移上去取消事件
    if (cancelMarquee !== false) {
      $('#' + id + ' .tbl-header tbody').hover(
        function () {
          clearInterval(MyMarhq);
        },
        function () {
          clearInterval(MyMarhq);
          MyMarhq = setInterval(Marqueehq, speedhq == undefined ? 20 : speedhq);
        }
      );
    }
  }
}
```
