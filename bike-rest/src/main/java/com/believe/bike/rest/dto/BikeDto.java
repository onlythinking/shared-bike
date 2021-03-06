package com.believe.bike.rest.dto;

import com.believe.bike.core.model.Position;
import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;

/**
 * <p> The describe </p>
 *
 * @author Li Xingping
 */
@Data
public class BikeDto {

  @NotBlank
  @Max(value = 8)
  private String bikeNumber;
  @NotNull
  private Position position;

}
