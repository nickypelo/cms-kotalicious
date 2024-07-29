package com.kotalicious.food.service;

import com.kotalicious.food.model.Product;
import com.kotalicious.food.repository.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepo productRepo;
    private static final String UPLOAD_FOLDER = "src/main/resources/static";

    public Integer saveProduct(Product request, MultipartFile file) {
        //store image
        saveImageData(file);
        Product product = productRepo.save(request);

        return product.getId();
    }

    public List<Product> findAllProducts() {
        return productRepo.findAll();
    }

    private void saveImageData(MultipartFile image){
        try {
            File folder = new File(UPLOAD_FOLDER);
            if (!folder.exists()) {
                folder.mkdirs();
            }
            String filePath = UPLOAD_FOLDER + image.getOriginalFilename();
            image.transferTo(new File(filePath));
        }catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
