import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },

  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 1,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#fff',
  },

  filtrosContainer: {
    paddingVertical: 10,
  },

  filtrosScroll: {
    paddingHorizontal: 16,
    gap: 10,
  },

  filtroButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
  },

  filtroButtonActive: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },

  filtroButtonText: {
    fontSize: 13,
    color: '#aaa',
    fontWeight: '500',
  },

  filtroButtonTextActive: {
    color: '#000',
    fontWeight: '700',
  },

  ordenacaoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  ordenacaoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },

  botoesOrdenacao: {
    flexDirection: 'row',
    gap: 10,
  },

  botaoOrdenacao: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },

  botaoOrdenacaoActive: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },

  botaoOrdenacaoText: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: '600',
  },

  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyStateText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginTop: 16,
  },

  emptyStateSubtext: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },
});