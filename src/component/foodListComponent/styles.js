import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece7f1',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 24,
    minHeight: 60,
  },
  chatWrapCircle: {
    backgroundColor: '#426ae2',
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 24,
    right: 0,
  },
  cancelIcon: {
    width: 30,
    height: 30,
  },
  heading: {
    fontSize: 32,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  tabContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  searchWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#edeff5',
    borderRadius: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    opacity: 0.4,
  },
  searchInput: {
    height: 50,
    fontSize: 16,
  },
  head: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 6,
    height: 52,
    marginTop: 16,
    borderRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    elevation: 4,
  },
  headDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catIcon: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 10,
  },
  categoryName: {
    marginRight: 8,
    fontSize: 18,
  },
  servingSize: {
    fontSize: 16,
    color: '#666',
  },
  dropIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  subcategoriesWrapper: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  subCategoryname: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  items: {
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  quoteWrapper: {
    padding: 20,
  },
  quote: {
    backgroundColor: '#edeff5',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  proTipWrapper: {
    padding: 20,
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 8,
  },
  proTip: {
    color: '#fff',
    width: 80,
    textAlign: 'center',
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 4,
  },
  proTipMsg: {
    color: '#fff',
    width: '80%',
    fontSize: 14,
    lineHeight: 18,
  },
  notFound: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginVertical: 20,
  },
});

export default styles;
