// import styleImport from 'vite-plugin-style-import';

// export function configStyleImportPlugin() {
//   const styleImportPlugin = styleImport({
//     resolves: [],
//     libs: [
//       {
//         libraryName: 'element-plus',
//         esModule: true,
//         resolveStyle: (name) => {
//           console.log('name: ', name);
//           name = name.replace('el-', '');

//           // 这里是需要额外引入样式的子组件列表
//           const replaceArr = [
//             'message',
//             'message-box'
//           ];

//           return replaceArr.includes(name)
//             ? `element-plus/theme-chalk/src/${name}.scss`
//             : '';
//         },
//       },
//     ],
//   });
//   return styleImportPlugin;
// }
