import { computed } from 'vue';
import { isExternal as isExternalCheck } from '@/utils/layout';
export function useNavLink(item) {
  const route = useRoute();
  const isExternal = isExternalCheck(item.value.link);
  const props = computed(() => {
    const routePath = normalizePath(`/${route.data?.path}`);
    let active = false;
    if (item.value.activeMatch) {
      active = new RegExp(item.value.activeMatch).test(routePath);
    } else {
      const itemPath = normalizePath(item.value.link);
      active =
                itemPath === '/'
                  ? itemPath === routePath
                  : routePath.startsWith(itemPath);
    }
    return {
      class: {
        active,
        isExternal
      },
      href: isExternal ? item.value.link : withBase(item.value.link),
      target: item.value.target || (isExternal ? '_blank' : null),
      rel: item.value.rel || (isExternal ? 'noopener noreferrer' : null),
      'aria-label': item.value.ariaLabel
    };
  });
  return {
    props,
    isExternal
  };
}
function normalizePath(path) {
  if (path === undefined) return;
  return path
    .replace(/#.*$/, '')
    .replace(/\?.*$/, '')
    .replace(/\.(html|md)$/, '')
    .replace(/\/index$/, '/');
}
